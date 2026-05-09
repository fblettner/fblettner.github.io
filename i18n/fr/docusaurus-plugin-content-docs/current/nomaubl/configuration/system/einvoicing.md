---
title: E-Invoicing
description: "Configure le dialogue entre NomaUBL et une Plateforme Agréée (PA) — par référence à un api-connecteur réutilisable, avec un repli SFTP optionnel pour la soumission sortante et une section de récupération des statuts. Mise en onglets : UBL Validation · PA Connection · FTP/SFTP · Status. L'api-connecteur porte le flux d'authentification et les endpoints ; cette page le référence par son nom et surcharge les noms d'endpoint par tâche au besoin."
keywords: [NomaUBL, e-invoicing, Plateforme Agréée, PA, api-connecteur, paMode, OAUTH2, REST API, SFTP, validation UBL, réforme facturation électronique, récupération des statuts, cycle de vie, JD Edwards, SAP, NetSuite]
---

# E-Invoicing

L'éditeur **E-Invoicing** définit **comment NomaUBL parle à une Plateforme Agréée (PA)** — la plateforme certifiée qui reçoit, valide et achemine les factures électroniques vers l'infrastructure publique française. Il définit aussi l'étape locale de transformation UBL (répertoire XSL) et les paramètres de la boucle de récupération des statuts.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — une fois la source mappée vers UBL.

:::info[Refonte en 2026.05.8]
La configuration PA est désormais homogène entre **e-invoicing**, **[e-directory](./edirectory.md)** et **[e-reporting](./ereporting.md)** — chaque modèle système référence un [api-connecteur](../api-connectors.md) réutilisable au lieu de porter ses propres champs d'authentification et endpoints, et la forme inline historique est supprimée (sans repli). L'éditeur passe de cinq à **quatre onglets** — l'onglet *Mock / Testing* a disparu (pointer un api-connecteur vers un mock Postman ou un stub local pour les tests hors-ligne) et l'onglet *Actions* a migré vers une page dédiée sous [Gestion → Liaisons d'actions](../../management/actions.md). *Send Mode* quitte *PA Connection* pour rejoindre *FTP/SFTP* où il appartient logiquement, et le groupe *Background Scheduling* disparaît (ces intervalles ne fonctionnaient que sur le modèle [global](./global.md)).
:::

L'éditeur comporte **quatre onglets** :

1. **UBL Validation** — répertoire des transformations XSL utilisées pour convertir le XML source en UBL.
2. **PA Connection** — choix de l'api-connecteur qui porte le transport HTTP de la PA, plus surcharges de noms d'endpoint par tâche et paramètres de connexion.
3. **FTP/SFTP** — sélecteur Send Mode et identifiants du serveur SFTP utilisés quand le sélecteur est positionné sur `FTP`.
4. **Status** — curseur de récupération des statuts et renvoi vers les intervalles de polling sur `global`.

---

## Accès à l'éditeur

- *Paramètres* → modèle **e-invoicing** (la ressource au niveau système).
- La portée par défaut est le template platform-wide `e-invoicing`. Les surcharges par société se trouvent sur les templates `e-invoicing-{kco}` et suivent la même forme ; le résolveur côté runtime regarde d'abord le template par société puis retombe sur le template platform-wide.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="einv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="einv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="einv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="560" rx="14" fill="url(#einv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="106" height="24" rx="4" fill="transparent"/>
  <text x="293" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL Validation</text>
  <rect x="352" y="28" width="100" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="402" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">PA Connection</text>
  <rect x="458" y="28" width="76" height="24" rx="4" fill="transparent"/>
  <text x="496" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <rect x="540" y="28" width="60" height="24" rx="4" fill="transparent"/>
  <text x="570" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Status</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">api-connecteur</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Le transport HTTP de la PA — flux d'auth, base URL, endpoints — vit dans un api-connecteur réutilisable.</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="320" y="118" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="135" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">pa-default ▾</text>
  <text x="610" y="135" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">éditer sous Connecteurs API</text>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharges d'endpoint par tâche</text>
  <text x="240" y="186" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Nom d'endpoint sur pa-default pour chaque tâche PA. Vide = utilise le nom par défaut affiché.</text>

  <rect x="240" y="196" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="211" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Import            |  import</text>
  <rect x="240" y="220" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Import status     |  import-status</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Invoice statuses  |  invoice-statuses</text>
  <rect x="240" y="268" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="283" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Resolve invoice   |  resolve-invoice</text>
  <rect x="240" y="292" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="307" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Post status       |  post-status</text>
  <rect x="240" y="316" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="331" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Report import     |  report-import</text>

  <line x1="240" y1="358" x2="780" y2="358" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="382" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Connection</text>
  <text x="240" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TIMEOUT (MS)</text>
  <rect x="320" y="394" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="411" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">30000</text>

  <text x="460" y="404" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SSL VERIFY</text>
  <rect x="540" y="394" width="240" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="411" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">true ▾</text>

  <line x1="240" y1="438" x2="780" y2="438" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="462" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet FTP/SFTP — aperçu</text>
  <text x="240" y="484" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SEND MODE</text>
  <rect x="320" y="474" width="200" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="330" y="491" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">API ▾</text>
  <text x="540" y="491" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">carte SFTP atténuée hors mode FTP</text>

  <rect x="240" y="510" width="540" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1" opacity="0.5"/>
  <text x="252" y="528" fill="#94a3b8" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SFTP SERVER</text>
  <text x="252" y="542" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Host / Port / User / Password / Outbound / Inbound</text>
  <text x="252" y="558" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">utilisé quand Send Mode = FTP</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">api-connecteur réutilisable</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aucun champ d'auth ni endpoint inline ici</text>
  <line x1="200" y1="115" x2="320" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="820" y="220" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharges par tâche</text>
  <text x="830" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">noms d'endpoint sur le connecteur</text>
  <line x1="820" y1="236" x2="780" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="20" y="396" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="411" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Timeout + SSL verify</text>
  <text x="30" y="424" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paramètres de connexion uniquement</text>
  <line x1="200" y1="412" x2="320" y2="406" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>

  <rect x="820" y="476" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="491" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">paMode = API / FTP</text>
  <text x="830" y="504" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = pas d'envoi sortant</text>
  <line x1="820" y1="492" x2="520" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#einv-arrow)"/>
</svg>

---

## Onglet 1 — UBL Validation

Cet onglet configure le **répertoire des fichiers XSL** utilisés pour **transformer le XML source en UBL**. La validation de conformité UBL passe par des schématrons standards, documentés sur la page [Validate](../../ubl-tools/validate.md).

| Champ | Description |
|---|---|
| **XSLT Directory** | Répertoire qui contient les fichiers de transformation `.xsl` utilisés pour convertir le XML source en UBL. Le placeholder `%APP_HOME%` se développe vers la racine d'installation NomaUBL. |

---

## Onglet 2 — PA Connection

### api-connecteur

Le transport HTTP de la PA — flux d'authentification, base URL, endpoints — vit dans un [api-connecteur](../api-connectors.md) réutilisable. Cette page **le référence par son nom uniquement** et ne porte jamais de champ d'auth ni d'endpoint HTTP en ligne. L'`pa-default` embarqué couvre le flux standard ; choisir un autre connecteur quand la PA expose un schéma d'auth non standard ou quand plusieurs PA demandent des connecteurs différents.

| Champ | Description |
|---|---|
| **Connector** | Liste déroulante des templates `api-connector`. Le connecteur sélectionné porte le `baseUrl`, l'`authType`, les identifiants, l'endpoint de jeton et le catalogue d'endpoints HTTP. Modifier le connecteur lui-même sous [Connecteurs API](../api-connectors.md). |

### Surcharges d'endpoint par tâche

Chaque tâche PA dans NomaUBL a un nom d'endpoint par défaut. Quand l'api-connecteur expose un nom différent pour la même tâche, saisir une surcharge ci-dessous. Laisser vide pour utiliser le nom par défaut affiché.

| Champ | Défaut | Utilisé par |
|---|---|---|
| **Import** | `import` | Soumission d'une facture à la PA. |
| **Import status** | `import-status` | Sondage du statut d'import de la PA. |
| **Invoice statuses** | `invoice-statuses` | Boucle de récupération des statuts du cycle de vie. |
| **Resolve invoice** | `resolve-invoice` | Résolution d'un identifiant attribué par la PA à partir d'une clé de document NomaUBL. |
| **Post status** | `post-status` | Renvoi des statuts vendeur (actions réglementaires) vers la PA. |
| **Report import** | `report-import` | Soumission e-Reporting quand le template [e-reporting](./ereporting.md) retombe sur le connecteur e-invoicing. |

### Connection

Paramètres de niveau connexion qui s'appliquent à **chaque appel routé via l'api-connecteur choisi**.

| Champ | Défaut | Description |
|---|---|---|
| **Timeout (ms)** | `30000` | Timeout des requêtes HTTP en millisecondes. Les appels trop longs sont annulés au-delà. |
| **SSL Verify** | `true` | Validation du certificat TLS de la PA. À positionner sur `false` uniquement en environnement de non-production avec des certificats auto-signés. |

---

## Onglet 3 — FTP/SFTP

### Send Mode

| Champ | Valeurs | Description |
|---|---|---|
| **Send Mode** *(`paMode`)* | `API` *(défaut)* / `FTP` / *(vide)* | Transport utilisé pour **envoyer les factures à la PA**. `API` route la soumission via l'api-connecteur choisi sur l'onglet précédent ; `FTP` écrit l'UBL dans un fichier temporaire et le pousse en SFTP via le serveur ci-dessous ; *(vide)* ignore complètement la soumission sortante (utile pendant le câblage d'un nouveau type de document). La récupération des statuts, le polling d'import et les actions vendeur passent toujours par l'API quel que soit ce choix. |

### SFTP Server

La carte entière est atténuée quand *Send Mode* ≠ `FTP` — ces champs ne s'appliquent qu'au transport SFTP.

| Champ | Description |
|---|---|
| **Host** | Hôte SFTP (par exemple `ftp.plateformeagree.fr`). |
| **Port** | Port SFTP. Défaut `22`. |
| **User** | Utilisateur SFTP. |
| **Password** | Mot de passe SFTP. |
| **Outbound Dir** | Répertoire distant où NomaUBL dépose les fichiers UBL pour la PA (par exemple `/out/invoices/`). |
| **Inbound Dir** | Répertoire distant où la PA écrit les mises à jour de statut que NomaUBL récupère (par exemple `/in/status/`). |

---

## Onglet 4 — Status

La section **Status Retrieval** pilote la boucle de récupération des statuts de cycle de vie.

| Champ | Défaut | Description |
|---|---|---|
| **Page size** | `100` | Nombre de statuts récupérés par page lors du polling de la PA. |
| **Last retrieved at** | *(mis à jour automatiquement)* | Date ISO de la dernière récupération réussie (par exemple `2025-01-01T00:00:00Z`). Mis à jour automatiquement après chaque exécution ; une édition manuelle agit comme point de départ — utile pour rejouer une fenêtre. |

:::info[Les intervalles de polling vivent sur `global`]
Les intervalles qui pilotent la fréquence de polling de la PA — `fetchImportInterval`, `fetchStatusInterval`, cadence e-reporting — sont lus depuis le [template `global`](./global.md), section *Scheduling*. Le groupe *Background Scheduling* de cette page écrivait ces clés ici, mais le scheduler ne les lisait jamais sur ce template — l'écriture morte a été retirée en 2026.05.8. Modifier les intervalles sur `global → Scheduling` et ils s'appliquent à toutes les sociétés.
:::

---

## Liaisons d'actions — déplacées

L'onglet **Actions** qui se trouvait sur cette page dans la version précédente a été retiré en 2026.05.7 et les liaisons d'actions multi-appels ont migré sur leur propre page sous [Gestion → Liaisons d'actions](../../management/actions.md). La forme de stockage (`action.N.id` / `.connector` / `.endpoint` / `.params` sur ce template) est inchangée — seul l'éditeur a bougé. La nouvelle page gère la liste multi-appels, le drapeau *Arrêt sur échec* par appel et le chaînage des réponses via les placeholders `{call.N.fieldName}`.

---

## Conseils & bonnes pratiques

- **Choisir d'abord l'api-connecteur.** Sans connecteur, les champs *Surcharges d'endpoint par tâche* restent masqués et la PA est inaccessible. L'`pa-default` embarqué est un point de départ raisonnable.
- **Laisser les surcharges par tâche vides quand les noms d'endpoint du connecteur correspondent déjà.** Un connecteur `pa-default` qui expose un endpoint littéralement nommé `import` n'a pas besoin d'une surcharge sur la ligne *Import*. La page n'enregistre que les valeurs qui diffèrent du défaut — saisir le défaut est sans effet mais ajoute du bruit.
- **Démarrer en `paMode=` (vide)** lors du câblage d'un nouveau type de document. Le pipeline UBL fonctionne de bout en bout sans impliquer la PA, ce qui fait remonter les mappings sources et les échecs Schematron avant que le réseau soit dans la boucle. Basculer sur `API` une fois le côté données propre.
- **N'utiliser SFTP que quand la PA l'exige réellement.** REST est plus simple à diagnostiquer, et le panneau de test de l'api-connecteur fournit un retour clair. SFTP convient quand la PA impose un dépôt fichier ou pour des soumissions par lots à fort volume.
- **Modifier les intervalles de polling sur `global → Scheduling`, pas ici.** Les champs de cette page ont été retirés en 2026.05.8, ils n'avaient aucun effet.
- **Tester contre un mock Postman ou un stub local** en hors-ligne. L'ancien mock en mémoire ne servait que avant le refactor api-connecteur — pointer plutôt l'api-connecteur vers l'URL du mock.
- **Les surcharges par société se trouvent sur `e-invoicing-{kco}`.** Copier le template `e-invoicing` platform-wide sous le nouveau nom depuis *Paramètres* et ne modifier que les champs qui diffèrent — typiquement `connector`, quelques surcharges d'endpoint ou les identifiants SFTP quand la société `00070` utilise une PA distincte.
