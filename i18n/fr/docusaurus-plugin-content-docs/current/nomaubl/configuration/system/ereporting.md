---
title: E-Reporting
description: "Configure la production et la soumission des bundles e-Reporting — identité Sender / Issuer, planification et flux, api-connecteur qui porte le transport HTTP de la PA, et repli SFTP pour la soumission sortante. Mise en quatre onglets : Identity · Reporting · PA Connection · FTP/SFTP. paMode = API / FTP / vide remplace l'ancien drapeau sendToPA Y/N."
keywords: [NomaUBL, e-reporting, e-reporting français, AFNOR XP Z12-014, Flux 10.1, Flux 10.3, B2BINT, B2C, OUTOFSCOPE, sender, issuer, SIREN, frequency, MONTHLY, paMode, api-connecteur, SFTP, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Reporting

L'éditeur **E-Reporting** configure la **production et la soumission des bundles e-Reporting périodiques** exigés par la réforme française de la facturation électronique. Chaque société dépose un rapport réglementaire couvrant ses flux B2BINT, B2C et hors champ à une cadence fixe (mensuelle par défaut) ; cette page contrôle l'identité sender / issuer émise dans le bundle, la cadence et le choix des flux, et le transport PA utilisé pour téléverser le bundle une fois généré.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — une fois la source mappée vers UBL.

:::info[Refonte en 2026.05.8]
L'E-Reporting est désormais **entièrement désolidarisé** de l'[E-Invoicing](./einvoicing.md). Il choisit son propre [api-connecteur](../api-connectors.md), son propre `endpoint.report-import` et son propre `paMode` — le reporting peut donc cibler une plateforme différente, ou utiliser des identifiants différents sur la même plateforme, par rapport à l'import des factures. Un nouveau **transport SFTP** permet de téléverser le bundle en dépôt fichier au lieu d'un POST REST. L'ancien drapeau `sendToPA` Y/N est remplacé par `paMode` (`API` / `FTP` / vide) pour cohérence avec l'E-Invoicing. La vérification de configuration signale désormais `paMode=API` sans `connector` et `paMode=FTP` sans `paFtpHost` comme erreurs.
:::

L'éditeur comporte **quatre onglets** :

1. **Identity** — champs d'identification Sender (PA) et Issuer (Déclarant) émis dans le bundle.
2. **Reporting** — Business Process (B2BINT) et choix de la cadence et des flux.
3. **PA Connection** — choix de l'api-connecteur qui porte le transport HTTP de la PA, plus la surcharge du nom d'endpoint et les paramètres de connexion.
4. **FTP/SFTP** — sélecteur Send Mode et identifiants du serveur SFTP utilisés quand le sélecteur est positionné sur `FTP`.

---

## Accès à l'éditeur

- *Paramètres* → modèle **e-reporting** (la ressource au niveau système).
- La portée par défaut est le template platform-wide `e-reporting`. Les surcharges par société se trouvent sur les templates `e-reporting-{kco}` et suivent la même forme ; le résolveur côté runtime regarde d'abord le template par société puis retombe sur le template platform-wide.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="erep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="erep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="erep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="580" rx="14" fill="url(#erep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="68" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Identity</text>
  <rect x="314" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="352" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Reporting</text>
  <rect x="396" y="28" width="100" height="24" rx="4" fill="transparent"/>
  <text x="446" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">PA Connection</text>
  <rect x="502" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="540" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Sender (PA)</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MATRICULE</text>
  <rect x="320" y="98" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="115" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">PA01</text>
  <text x="450" y="108" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE CODE</text>
  <rect x="530" y="98" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="540" y="115" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">WK</text>

  <text x="240" y="148" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Issuer (Déclarant)</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIREN</text>
  <rect x="320" y="160" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">123456789</text>
  <text x="490" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SCHEME</text>
  <rect x="558" y="160" width="92" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="568" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">0002 ▾</text>
  <text x="664" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <rect x="700" y="160" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="710" y="177" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">SE ▾</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Reporting — aperçu</text>
  <text x="240" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FREQUENCY</text>
  <rect x="320" y="244" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">MONTHLY ▾</text>
  <text x="490" y="254" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FLUX</text>
  <rect x="528" y="244" width="252" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="261" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">10.1,10.3</text>

  <line x1="240" y1="292" x2="780" y2="292" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="316" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet PA Connection — aperçu</text>
  <text x="240" y="338" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="320" y="328" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="345" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">pa-default ▾</text>
  <text x="610" y="345" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">indépendant d'e-invoicing</text>

  <text x="240" y="378" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPORT IMPORT ENDPOINT</text>
  <rect x="380" y="368" width="260" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="385" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">report-import</text>

  <line x1="240" y1="412" x2="780" y2="412" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="436" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet FTP/SFTP — aperçu</text>
  <text x="240" y="458" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND MODE</text>
  <rect x="320" y="448" width="180" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="330" y="465" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">API ▾</text>
  <text x="510" y="465" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">vide = génère sans soumettre</text>

  <rect x="240" y="486" width="540" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1" opacity="0.5"/>
  <text x="252" y="506" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SFTP SERVER</text>
  <text x="660" y="506" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">utilisé quand Send Mode = FTP</text>
  <text x="252" y="524" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Host       |  ftp.plateformeagree.fr</text>
  <text x="252" y="540" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Port       |  22</text>
  <text x="252" y="556" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Outbound   |  /out/reports/</text>
  <text x="252" y="572" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Inbound    |  /in/reports/</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identité Sender + Issuer</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">émise dans chaque bundle</text>
  <line x1="200" y1="115" x2="320" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cadence + flux</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pilote la période du scheduler</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">api-connecteur propre</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indépendant d'e-invoicing</text>
  <line x1="200" y1="346" x2="320" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>

  <rect x="820" y="450" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">paMode = API/FTP/vide</text>
  <text x="830" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplace sendToPA Y/N</text>
  <line x1="820" y1="466" x2="500" y2="466" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#erep-arrow)"/>
</svg>

---

## Onglet 1 — Identity

L'onglet Identity porte les acteurs émis sur chaque bundle de rapport. Les deux blocs sont rendus comme éléments XML à l'intérieur de l'enveloppe AFNOR XP Z12-014 (`<Sender>` et `<Issuer>`).

### Sender (PA)

| Champ | Défaut | Description |
|---|---|---|
| **Matricule** | — | Matricule PA (4 caractères), émis comme `<Sender><Id schemeId="0238">`. |
| **Name** | — | Optionnel. Émis comme `<Sender><Name>`. |
| **Role Code** | `WK` | Défaut `WK` (PA). Émis comme `<Sender><RoleCode>`. |

### Issuer (Déclarant)

| Champ | Défaut | Description |
|---|---|---|
| **Identifier (SIREN)** | — | Identifiant du déclarant émis comme `<Issuer><Id schemeId="0002">`. |
| **Name** | — | Optionnel. Émis comme `<Issuer><Name>`. |
| **Scheme ID** | `0002` | Schéma ICD ISO 6523. Défaut `0002` (SIREN France). |
| **Role Code** | `SE` | `SE` pour la déclaration des ventes (défaut), `BY` pour la déclaration des achats. |
| **Companies (kco) override** | *(vide)* | Liste de sociétés à traiter, séparées par virgule. Vide = détection auto à partir des factures et des templates de surcharge par société. |

---

## Onglet 2 — Reporting

### Business Process (B2BINT uniquement)

Ces champs sont émis sur les éléments `<BusinessProcess>` par facture, **uniquement pour les factures `B2BINT`**.

| Champ | Description |
|---|---|
| **Business Process ID** | Optionnel. TT-28 *cadre de facturation* (par exemple `B1`, `P1`). |
| **Business Process Type ID** | Optionnel. Identifiant de spécification TT-29. |
| **Flow Name** | Optionnel. TT-2 émis comme `<ReportDocument><Name>`. |

### Schedule & Flux

| Champ | Défaut | Description |
|---|---|---|
| **Frequency** | `MONTHLY` | Pilote la période auto-calculée par le scheduler et le défaut de la modale *Generate*. |
| **Flux** | `10.1,10.3` | Codes flux séparés par virgule. Défaut couvre Flux 10.1 (détail B2BINT) et Flux 10.3 (B2C / OUTOFSCOPE agrégé). |
| **Default Type Code** | `IN` | Code de type de rapport par défaut. |

---

## Onglet 3 — PA Connection

### api-connecteur

Le transport HTTP de la PA — flux d'authentification, base URL, endpoints — vit dans un [api-connecteur](../api-connectors.md) réutilisable. L'E-Reporting **choisit son propre connecteur** au lieu de partager celui réglé sur l'[E-Invoicing](./einvoicing.md), ce qui permet de cibler une plateforme différente — ou des identifiants différents sur la même plateforme — par rapport à l'import de factures.

| Champ | Description |
|---|---|
| **Connector** | Liste déroulante des templates `api-connector`. Choisir un connecteur différent d'e-invoicing quand le flux de reporting passe par une plateforme distincte ou utilise des identifiants distincts. Modifier le connecteur lui-même sous [Connecteurs API](../api-connectors.md). |

### Surcharge d'endpoint par tâche

| Champ | Défaut | Description |
|---|---|---|
| **Report import** | `report-import` | Nom d'endpoint sur le connecteur choisi pour la soumission du rapport. Vide = utilise le défaut. |

### Connection

| Champ | Défaut | Description |
|---|---|---|
| **Timeout (ms)** | `30000` | Timeout des requêtes HTTP en millisecondes. Les soumissions trop longues sont annulées au-delà. |
| **SSL Verify** | `true` | Validation du certificat TLS de la PA. À positionner sur `false` uniquement en environnement de non-production avec des certificats auto-signés. |

---

## Onglet 4 — FTP/SFTP

### Send Mode

| Champ | Valeurs | Description |
|---|---|---|
| **Send Mode** *(`paMode`)* | `API` *(défaut)* / `FTP` / *(vide)* | Transport utilisé pour **soumettre les rapports générés** à la PA. `API` route le bundle via l'api-connecteur choisi sur l'onglet précédent ; `FTP` écrit le XML dans un fichier temporaire et le pousse en SFTP via le serveur ci-dessous ; *(vide)* permet à NomaUBL de **générer les rapports sans les soumettre** — utile pour valider l'identité et le choix des flux avant d'impliquer la PA. |

Le champ `paMode` remplace l'ancien drapeau `sendToPA` Y/N en 2026.05.8. Mêmes sémantiques, un seul champ, cohérent avec l'E-Invoicing.

### SFTP Server

La carte entière est atténuée quand *Send Mode* ≠ `FTP` — ces champs ne s'appliquent qu'au transport SFTP.

| Champ | Description |
|---|---|
| **Host** | Hôte SFTP (par exemple `ftp.plateformeagree.fr`). |
| **Port** | Port SFTP. Défaut `22`. |
| **User** | Utilisateur SFTP. |
| **Password** | Mot de passe SFTP. |
| **Outbound Dir** | Répertoire distant où NomaUBL dépose les bundles de rapport pour la PA (par exemple `/out/reports/`). |
| **Inbound Dir** | Répertoire distant où la PA écrit les accusés (par exemple `/in/reports/`). |

---

## Vérification de configuration

La vérification de configuration sur le [Tableau de bord IT](../../application/tech-dashboard.md) valide le template selon la nouvelle forme :

- `paMode=API` sans `connector` est signalé comme erreur (le transport API n'a rien à appeler).
- `paMode=FTP` sans `paFtpHost` est signalé comme erreur (le transport SFTP n'a pas de serveur).
- `paMode=` (vide) avec un `connector` est valide — les rapports sont générés localement et ne sont pas soumis.
- `issuerSiren`, `frequency` et `flux` sont validés dès que `paMode` est non vide (le bundle sera effectivement soumis).

L'ancien contrôle `sendToPA=Y` / `issuerSiren` est retiré — remplacé par les règles par `paMode` ci-dessus.

---

## Conseils & bonnes pratiques

- **Choisir un api-connecteur distinct quand la plateforme de reporting diffère.** Les installations multi-plateforme ont souvent l'e-invoicing sur une PA et l'e-reporting sur une autre — c'est précisément pour cela que chaque template système porte sa propre référence de connecteur. Choisir le même nom des deux côtés quand ils partagent la même plateforme.
- **Démarrer en `paMode=` (vide)** lors du câblage d'une nouvelle société. NomaUBL génère le rapport localement, ce qui permet de valider l'identité et le choix des flux contre un échantillon sans toucher la PA. Basculer sur `API` une fois le bundle correct.
- **N'utiliser SFTP que quand la PA impose un dépôt fichier.** La soumission REST est plus simple à diagnostiquer et fonctionne avec le panneau de test de l'api-connecteur ; SFTP convient pour des soumissions à fort volume ou quand la PA ne propose pas d'endpoint REST report-import.
- **Les surcharges par société se trouvent sur `e-reporting-{kco}`.** Copier le template `e-reporting` platform-wide sous le nouveau nom depuis *Paramètres* et ne modifier que les champs qui diffèrent — typiquement `issuerSiren`, la référence `connector` ou les identifiants SFTP quand la société `00070` déclare via une autre plateforme.
- **La cadence pilote la période auto-calculée.** La régler sur `MONTHLY` fait émettre par le scheduler un bundle par mois couvrant le mois précédent ; `QUARTERLY` étend la fenêtre. La modale *Generate* permet toujours à l'utilisateur de surcharger la période à l'exécution.
- **Le champ Companies (kco) override est rarement nécessaire.** NomaUBL détecte automatiquement les sociétés à partir des factures qu'il traite et de l'existence des templates `e-reporting-{kco}`. Renseigner le champ manuellement uniquement quand la déclaration doit être limitée à un sous-ensemble (par exemple une division pendant un déploiement progressif).
