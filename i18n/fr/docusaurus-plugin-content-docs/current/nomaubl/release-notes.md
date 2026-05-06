---
title: Notes de version
description: "Notes de version NomaUBL — toutes les évolutions visibles par l'utilisateur livrées dans la plateforme, version par version, en ordre chronologique inverse. Reflète la page Notes de version intégrée à l'application."
keywords: [NomaUBL, notes de version, changelog, version, e-reporting, journal de traitement, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Notes de version

Toutes les évolutions visibles par les utilisateurs de NomaUBL — IHM, API REST, CLI, comportement — sont consignées ici. La version la plus récente apparaît en haut. Cette page reflète la carte **À propos de cette version** et l'écran *Notes de version* intégrés à l'application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-05-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.05.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-06</span></a>
  <a href="#v2026-05-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-05-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.05.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-05</span></a>
  <a href="#v2026-04-10" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.10 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-05-04</span></a>
  <a href="#v2026-04-9" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.9 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-30</span></a>
  <a href="#v2026-04-8" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.8 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-7" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.7 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-6" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.6 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-5" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.5 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-4" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.4 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-3" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.3 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Version initiale</span></a>
</div>

---

## 2026.05.3 — 2026-05-06 \{#v2026-05-3\}

Système de notifications — les changements de statut d'une facture atteignent désormais les utilisateurs via une boîte de réception dans le portail, par e-mail (avec le PDF de la facture joint par défaut) et par appels d'API externes, le tout piloté par des règles définies par l'utilisateur.

### Stockage et orchestrateur

- Nouvelle table `F564253` (DDL Oracle + Postgres, plus ajout dans `AuthManager.initTables` pour qu'une installation neuve la crée automatiquement). Une ligne par notification délivrée, clé `NTUKID` seule, avec `(NTDOC, NTDCT, NTKCO)` référençant la facture. Index composites sur `(NTUSER, NTEV01, NTUPMJ DESC)` pour la pastille de la cloche et l'inbox, et sur `(NTDOC, NTDCT, NTKCO)` pour l'historique au niveau facture.
- Nouveau package `custom.ubl.notify` : `NotificationDispatcher` (singleton avec un pool de 2 threads pour l'envoi asynchrone), `NotificationDatabaseHandler` (CRUD sur `F564253`, avec troncature à l'insertion alignée sur les largeurs de colonnes pour qu'une valeur source inhabituellement longue ne fasse pas échouer la dispatch), `EmailDispatcher` et le POJO `NotificationRule`.
- Les règles sont enregistrées comme ressources `notification-rule` dans un fichier dédié `config-notifications.json` à côté de la configuration principale ; `ConfigJson` répartit les ressources vers ce fichier en fonction de leur type.
- Purge quotidienne dans `BackgroundScheduler` pilotée par `global.notificationsRetentionDays` (défaut 90 jours, `0` désactive).
- À la première initialisation, le dispatcher enregistre un crochet d'arrêt JVM ; les exécutions CLI qui se terminent juste après une mise à jour de statut peuvent ainsi vider le pool de threads (sursis de 2 secondes) avant l'arrêt du processus.

### Points d'intégration sur les changements de statut

- Branchement dans `InvoiceStatusCatalog.StatusTransition.apply()` après les écritures en base : les règles sont évaluées et déclenchées à chaque transition. Toutes les exceptions sont capturées — un échec de notification n'annule jamais la mise à jour de statut sous-jacente.
- Les valeurs de statut, motif et action qui viennent d'être appliquées sont passées directement à `NotificationDispatcher.fire(...)`. Le dispatcher n'a donc plus à relire `F564231` depuis une connexion JDBC séparée — cette lecture renvoyait un instantané périmé tant que la transaction appelante (par exemple `ImportStatusHandler`) n'avait pas encore été validée, ce qui faisait apparaître l'ancien libellé dans le corps de la notification.
- Le `SetStatusModal` côté UI (cible base de données) déclenche aussi les notifications désormais — ce chemin contournait `StatusTransition.apply` et restait silencieux auparavant.
- Les modes CLI (`-process`, `-fetch-import`, `-fetch-status`, `-fetch-single`, `-fetch-all`, l'ancien `-run`) appellent un utilitaire commun `initRuntimeCatalogs` qui initialise à la fois `InvoiceStatusCatalog` et `NotificationDispatcher`. Sans cela, les traitements en lot mettaient à jour les statuts mais ignoraient les notifications, le singleton du dispatcher n'étant jamais initialisé.

### Canal e-mail

- Une seule transaction SMTP par envoi : toutes les adresses (l'e-mail résolu de la cible portail plus chaque entrée d'`emailRecipients`) sont placées dans l'en-tête `To:` d'un seul message, en un appel à `Transport.sendMessage`. La boucle adresse-par-adresse précédente se bloquait dès qu'un serveur SMTP gérait mal la fermeture de connexion en milieu de boucle, ce qui faisait disparaître silencieusement tous les envois après le premier.
- Séquence explicite `Transport.connect` / `sendMessage` / `close` dans un `try/finally` avec délais d'expiration stricts sur la socket (`connectiontimeout`, `timeout`, `writetimeout`, tous à 20 s). Les erreurs au moment du `close` sont absorbées, pour qu'un nettoyage bloqué ne contamine pas l'envoi suivant.
- PDF de la facture rendu et joint par défaut, contrôlé par le drapeau `attachPdf` de la règle (valeur par défaut `Y`). Le PDF est généré une seule fois par envoi et réutilisé pour chaque destinataire ; un échec de rendu est tracé mais ne fait pas échouer l'e-mail.
- Sujet et corps par défaut quand la règle laisse `emailSubject` ou `emailBody` vides : `Invoice {doc} {dct} {kco} — {statusLabel}` pour le sujet de l'e-mail et un corps avec les lignes `Status / Reason / Action`. Le `NTMSGP` côté portail garde uniquement le libellé du statut, la boîte de réception affichant déjà `NTDOC · NTDCT · NTKCO` à côté.

### Modèle de destinataire

- La cible portail (utilisateur / rôle) et `emailRecipients` sont des champs indépendants : possibilité de renseigner l'un, l'autre ou les deux. La cible portail reçoit aussi automatiquement le canal e-mail si son compte F564250 a un `USEMAIL` renseigné.
- `emailRecipients` accepte les séparateurs `,` et `;`.
- Compatibilité ascendante : les règles existantes avec `recipientType=email` sont migrées au chargement — l'adresse passe dans `emailRecipients` et le type est vidé.
- Résolution des destinataires plus tolérante : si la lecture de F564250 échoue (connecteur `db-nomaubl` absent, table manquante, incident transitoire), un destinataire portail est tout de même émis avec le nom d'utilisateur littéral, au lieu de laisser tomber la règle silencieusement avec un message *No recipients resolved*.

### Installations sans authentification

- Lorsque `global.authEnabled != "Y"`, le dispatcher écrit les lignes portail sous une valeur sentinelle de diffusion (`NTUSER='*'`) ; les routes inbox et cloche interrogent cette même sentinelle quand aucun utilisateur n'est connecté. Les notifications fonctionnent sans qu'aucune ligne F564250 ne soit nécessaire.
- La cloche reste visible dans la barre d'utilitaires quel que soit l'état d'authentification (auparavant cachée à l'intérieur de la branche réservée aux utilisateurs connectés).
- L'éditeur de destinataire adapte ses libellés : quand l'authentification est désactivée, l'option vide affiche *Diffusion — tous les utilisateurs* au lieu de *Aucune — emails uniquement*.

### Frontend

- Nouvelle page **Notifications** dans le groupe Gestion — boîte de réception avec onglets Toutes / Non lues, action *tout marquer comme lu*, suppression par ligne, badge de statut coloré selon le catalogue, bande d'accent pour les lignes non lues, et une ligne méta `doc · dct · kco · motif · action · règle`. Cliquer sur une ligne ouvre la facture liée dans `InvoiceDetailModal`. Voir [Notifications](./management/notifications.md).
- Nouvel éditeur **Règles de notification** — liste latérale et formulaire à sections : déclencheur, canaux, destinataire, contenu e-mail, appel d'action, et un panneau de Test synchrone qui exécute réellement la règle. Les codes de déclenchement utilisent des multi-sélections à puces alimentées par les ressources `statuses` et `rejection-reason-codes` — la règle ne peut donc plus diverger des codes assignables à une facture. La section action reprend la structure de *Process API* : connecteur en liste déroulante, endpoint en liste déroulante alimentée par `api.connectors.listEndpoints(...)`, et lignes de paramètres pré-remplies à partir de la définition de l'endpoint. Voir [Règles de notification](./management/notification-rules.md).
- Nouveau composant **NotificationBell** dans la barre d'utilitaires — interroge `/api/notifications/unread-count` toutes les 30 s, affiche une pastille rouge avec le compteur et un menu déroulant des 6 dernières notifications. Cliquer sur une notification la marque comme lue puis ouvre directement la modale de la facture via un événement `nomaubl:open-notification` sur `window` (cela fonctionne même quand l'utilisateur est déjà sur la page inbox et que le composant n'est donc pas remonté).
- Permissions de rôle pour les deux nouvelles pages, plus une nouvelle icône `bell` dans le jeu d'icônes central.

---

## 2026.05.2 — 2026-05-06 \{#v2026-05-2\}

Soumission B2B française à la PA — pièces jointes PDF qualifiées (LISIBLE + documents associés) et plusieurs corrections d'intégrité de l'aller-retour qui ont émergé pendant la mise en œuvre.

### Pièce jointe LISIBLE + pièces jointes additionnelles qualifiées

- Nouveau drapeau `lisible` Y/N sur les modèles de document. Quand `Y`, un PDF est rendu à partir de l'UBL fraîchement généré via le `pdf-template` résolu, puis réinjecté en tant que pièce jointe « facture lisible » (`cbc:ID = "LISIBLE"`). Indépendant du sélecteur `attachment` existant — les deux peuvent s'activer sur la même facture.
- Nouvelle propriété JSON `additionalAttachments` — liste d'entrées `{code, path}` intégrées comme blocs `cac:AdditionalDocumentReference`. Éditeur UI dans l'onglet Document avec un sélecteur de code (`RIB`, `BON_LIVRAISON`, `BON_COMMANDE`, `PJA`, `BORDEREAU_SUIVI`, `BORDEREAU_SUIVI_VALIDATION`, `DOCUMENT_ANNEXE`, `ETAT_ACOMPTE`, `FACTURE_PAIEMENT_DIRECT`, `RECAPITULATIF_COTRAITANCE`, `FEUILLE_DE_STYLE`) et un champ chemin. Les chemins acceptent les placeholders `%APP_HOME%`, `%ENV%`, `%DOCNAME%`, `%KCO%`, `%DOC%`, `%DCT%`. Les fichiers manquants sont tracés et ignorés — ils ne font pas échouer le traitement.
- `Tranform.embedPdfInUBL` reçoit une nouvelle surcharge à code String. Le qualifieur devient le `cbc:ID` du `cac:AdditionalDocumentReference` inséré. `cbc:DocumentTypeCode` n'est **pas** émis (UBL-SR-43 le réserve aux objets facturés 130 / 50) et `cbc:DocumentDescription` n'est **pas** émis non plus (la PA retournait HTTP 400 quand il était présent en plus de la pièce jointe). La signature 3-args reste identique : les appelants qui utilisent la forme historique `PDF_Invoice` ne sont pas impactés.
- `PdfTemplateEngine.render` et `InvoicePdfGenerator.generate` gagnent un booléen `mergeAttachment`. Le flux LISIBLE passe `false` pour que le PDF rendu n'hérite pas d'une pièce jointe déjà intégrée par le flux historique `create` / `attach` — sinon LISIBLE dupliquerait visiblement le PDF original à l'intérieur de lui-même.

### Corrections de format XML pour acceptation PA

Le parser de la Plateforme Agréée s'est avéré sensible à des octets précis que le code historique ne respectait pas :

- `embedPdfInUBL` repassait l'UBL par le transformer Xalan du JDK, qui émet `<?xml version = '1.0' encoding = 'UTF-8'?>` (espaces autour de `=`, apostrophes). Passage à Saxon (déjà utilisé par `convertToUBL`) pour que la sortie corresponde octet pour octet à `<?xml version="1.0" encoding="UTF-8" standalone="no"?>`. Propriété `STANDALONE = "no"` explicite ; attribut `filename` émis avant `mimeCode` pour respecter l'ordre historique.
- `convertToUBL` force aussi `standalone="no"`, pour que les flux qui contournent `embedPdfInUBL` (exécutions sans pièce jointe) produisent la même déclaration XML acceptée par la PA.
- Le nouveau `AdditionalDocumentReference` est inséré sur sa propre ligne — l'indentation est recopiée depuis le nœud blanc existant, avec une indentation supplémentaire en tête quand l'élément précédent est lui aussi un nœud Element (les pièces jointes consécutives et le `<cac:AccountingSupplierParty>` qui suit conservent chacun leur séparateur `\n   `).

### Garde-fou de ré-indentation ConfigJson

`tryReIndentJson` désérialisait toute chaîne commençant par `{` ou `[` comme du JSON imbriqué — y compris les variables de gabarit comme `"{content}"`, `"{statusAt}"`, `"{reportName}"` utilisées par d'autres modèles. La désérialisation « réussissait » parce que les crochets s'équilibraient, produisant un objet aux clés non quotées qui rendait `config.json` impossible à relire au rechargement suivant. Nouvelle heuristique `looksLikeJson()` qui exige soit un conteneur vide, soit un vrai démarreur de valeur JSON (clé entre guillemets après `{`, etc.) avant de récurser. Les modèles existants contenant des chaînes `{placeholder}` font désormais l'aller-retour correctement.

### Divers

- `parseUblXml` lit `cbc:LineExtensionAmount` (BT-131) directement et `InvoiceDetailModal` l'affiche tel quel comme montant de ligne au lieu de recalculer `qty × prix ± remises` — le recalcul comptait deux fois quand le prix unitaire était déjà net (une ligne 45 × 12,75 avec une remise ligne de 489,15 affichait 84,60 au lieu de 573,75 dans le modal alors que le PDF était correct).
- `ubl-template.xsl` : nouveau slot `TAG_CUSTOMER_SIRET` (BT-46) à côté du SIREN acheteur existant.

---

## 2026.05.1 — 2026-05-05 \{#v2026-05-1\}

Moteur de modèles PDF — Phase 2 : les modèles PDF deviennent des ressources partageables de premier ordre, gagnent une section générique `block` pilotée par XPath, et un éditeur visuel à part entière.

### Modèles PDF en ressources de premier ordre (Phase 2a)

- Nouveau type de ressource `pdf-template`, persisté dans `config-pdf.json` (renommé depuis `config-pdf-templates.json` pour la concision).
- Nouvelle page **Modèles PDF** (entrée du menu sous Gestion) pour créer, copier, importer, exporter et éditer des mises en page indépendamment de tout modèle de document. Voir [Modèles PDF](./management/pdf-templates.md) pour la référence complète.
- Les documents référencent une mise en page via la propriété `pdfTemplate` portée par la ressource doc-template. Plusieurs documents peuvent partager un même modèle PDF — édition unique, propagation à l'ensemble.
- Chaîne de résolution : `pdfTemplate` du doc-template → `defaultPdfTemplate` sur `global` → modèle interne livré. Le nom réservé `built-in` est en lecture seule et toujours disponible comme filet de sécurité.
- JSON formaté lisiblement sur disque : les objets `template` / `config` imbriqués sont écrits comme de vrais objets JSON indentés (et non comme des chaînes échappées), pour rester lisibles dans n'importe quel éditeur. Aller-retour assuré par `ConfigJson.readPropertyValue`, partagé pour que les loaders restent agnostiques de la forme sur disque.

### Section générique `block` (Phase 2b)

- Nouveau type de section `block` — primitives de mise en page pilotées par XPath qui se composent en n'importe quel contenu, sans classe dédiée :
  - `text` (littéral), `field` (valeur XPath, avec libellé inline optionnel et formatage `date` / `currency` / `number` / `percent`) ;
  - `image`, `spacer`, `hr` ;
  - conteneurs `row` / `column` (alignement + écart) ;
  - `repeat` (XPath → liste, rend son `child` par occurrence) ;
  - `if` (XPath → booléen, rend `child` si vrai) ;
  - `table` — grille `lignes × colonnes` avec bordures de cellules optionnelles et ligne d'en-tête stylée. Définir `xpath` la fait itérer (une ligne par occurrence), les enfants servant de gabarit par ligne.
- Les XPath des cellules à l'intérieur d'une table itérante sont automatiquement rendus relatifs : un chemin absolu commençant par le XPath de l'itérateur est tronqué au moment du rendu pour que chaque ligne s'évalue dans son propre contexte itéré.
- `align: end | center` sur un `row` réduit la ligne à ~50 % de largeur et aligne la table entière de ce côté, au lieu d'étirer des cellules à parts égales sur toute la page (les paires « libellé + valeur » restent groupées à droite).

### Éditeur visuel (Phase 2c)

- Nouveau `BlockCanvasEditor` monté dans le tiroir de toute section `block` : trois panneaux empilés (arbre, barre d'outils, inspecteur) plus une issue de secours JSON.
- Inspecteur : formulaires d'attributs par type avec sous-panneau de style ; le sélecteur **Type** en haut transforme le nœud sélectionné sur place (column → repeat sans suppression / recréation) via le helper `transmuteKind` qui reporte les champs compatibles.
- Le chargeur d'XML d'exemple est remonté à l'en-tête du modèle — chargement unique, tous les blocks réutilisent les entrées pour l'autocomplétion XPath.
- Le sélecteur XPath préserve les préfixes de namespace `cbc:` / `cac:` (requis par le moteur namespace-aware côté backend) et émet **`/*/<chemin-complet>`** pour que les sélections soient sans ambiguïté et indépendantes de la racine (Invoice ou CreditNote indifféremment). À l'intérieur d'un ancêtre itérant, le sélecteur supprime en plus le préfixe de l'itérateur pour que les cellules démarrent en chemin relatif (`cbc:TaxAmount` au lieu de `/*/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount`).
- L'aperçu en direct est remonté en haut du formulaire et s'ouvre dans une modale 960 × 85vh — fini la valse scroll-down / scroll-up pendant l'itération sur une mise en page.
- Le sélecteur de section est remonté en haut et converti en chips : un clic ajoute une section en haut de la liste, automatiquement ouverte pour rendre l'inspecteur immédiatement visible. `block` peut être ajouté plusieurs fois par modèle ; chaque block porte un `name` utilisateur affiché à côté de la ligne de section.

### Refonte du tiroir des sections prédéfinies

- Les bascules utilisent le composant `Checkbox` partagé (style rond-bleu cohérent au lieu des cases natives en mode sombre).
- Les bascules sont parsées par préfixe `Catégorie · Nom` et regroupées en colonnes côte à côte qui reflètent la mise en page PDF réelle — *Header* se lit comme **METAS** | **SUPPLIERS**, *Line Table* comme **Group headers** | **Columns** | **Sub-details** au lieu d'une longue liste plate.
- Bordure du tiroir adoucie : trait fin avec un accent bleu de 2 px à gauche.

### Corrections critiques

- **Scanner JSON top-level :** le parser maison utilisait un naïf `indexOf` pour localiser `"<clé>"`, qui faisait silencieusement correspondre la première occurrence imbriquée. Une table avec `children` listé avant `xpath` se retrouvait avec son `xpath` résolu vers celui du *premier enfant*, l'itérateur retournait 0 nœud, et la table entière disparaissait du PDF rendu. Remplacé par `findTopLevelValueStart` qui respecte la profondeur de crochets et l'état de chaîne, et n'identifie que les clés au niveau 1. Concerne `readString`, `readFloat`, `readBool`, `readStringArray` et les recherches `tree` / `children` / `child` / `style` dans `parseNode`.
- **Boucle d'écho de l'éditeur :** `parseConfig` perdait le champ `name` du block et `useEffect [value]` de `PdfTemplateForm` re-parsait à chaque écho — combinés, chaque frappe déclenchait `setSelectedPath([])` et démontait l'inspecteur, volant le focus et (sur émissions répétées) figeant la page. Les deux fonctions préservent désormais `name`, et les deux effets de seed sautent quand la valeur entrante correspond à la dernière émise (`lastEmittedRef`).
- **Tables itérantes :** un NodeList vide retourne désormais `null` proprement pour qu'OpenPDF n'étouffe pas sur une table à 0 ligne, et chaque cellule est rendue dans son propre try/catch — une cellule en erreur devient un placeholder `[ERROR]` inline au lieu de casser la mise en page complète de la ligne.

### Backend / helpers partagés

- `PdfContext` porte désormais le `Document` parsé namespace-aware pour que les sections `block` exécutent du XPath sans re-parser le XML UBL.
- `ConfigJson` expose `readPropertyValue`, `findStringEnd`, `findMatchingBracket`, `jsonUnescape`, `compactJson` et `tryReIndentJson` pour que d'autres types de ressources puissent opter pour le stockage JSON imbriqué formaté lisiblement.

---

## 2026.05.0 — 2026-05-05 \{#v2026-05-0\}

Refonte importante du pipeline de traitement de documents, du générateur PDF et de la surface REST des factures.

### Traitement piloté par le modèle de document (XML ou UBL)

- Nouvelle propriété `source` (`XML` | `UBL`) sur chaque modèle de document. Choisie dans l'onglet Document de **Gestion → Documents**.
- `XML` conserve le comportement actuel (XSL → UBL → BDD → envoi PA).
- `UBL` cible les fichiers déjà au format UBL 2.1. La clé primaire `(doc, dct, kco)` est extraite du `cbc:ID` de la facture via une regex à groupes nommés (`idPattern` + valeurs par défaut `docDefault` / `dctDefault` / `kcoDefault`). Exemples :
  - `F202600025` → `^(?<dct>[A-Z]+)(?<doc>\d+)$` (`kcoDefault = 00001`)
  - `38706889RI00001` → `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$`
- L'onglet Document inclut un assistant **Exemple cbc:ID + Suggérer + Tester** qui dispense d'écrire la regex à la main : coller un ID réel, *Suggérer* remplit la regex en segmentant sur les transitions lettres / chiffres, *Tester* applique le motif et les valeurs par défaut et affiche en direct le `(doc, dct, kco)` extrait.
- La convention `DOC_DCT_KCO_ubl.xml` n'est plus exigée — le traitement UBL extrait toujours les clés depuis `cbc:ID`. Le nom de fichier peut être quelconque.

### Point d'entrée unique pour le traitement

- Les pages **Process XML** et **Process UBL** disparaissent. Une seule page **Process Document** les remplace ; le formulaire bascule entre contrôles XML et UBL selon le `source` du modèle choisi.
- Une seule route backend : `POST /api/process` (remplace `/api/run` et `/api/process-ubl`).
- Une seule commande CLI : `-process <config> <modèle> <fichierOuDossier> [type] [drapeaux]` (remplace `-xml` et `-ubl`). `nomaubl.sh process …`.
- `-fetch-single` et `-fetch-all` perdent l'argument `processType` — inféré à partir du modèle. **Fetch Input** et **Paramètres → Planification** perdent également le sélecteur *Type de traitement*.

### Nouvelle page Documents

- **Sidebar → Gestion → Documents** ouvre une page dédiée aux modèles de documents (les entrées de `config-documents.json` référencées par `F564231.UHTMPL`). Elle dispose de ses propres boutons **Ajouter / Importer / Copier / Supprimer** et d'un champ **Description**. Les Paramètres conservent **Ajouter Connecteur / Copier / Supprimer** pour les modèles système et les connecteurs uniquement.

### F564231.UHTMPL — lien facture → modèle

- Nouvelle colonne `UHTMPL VARCHAR2(40)` sur la table d'en-tête. Stockée au moment du traitement (chemins XML et UBL) pour permettre au générateur PDF de retrouver le `pdfTemplate` JSON spécifique au document lors du rendu.
- DDL ajouté à `sql/oracle/ddl.sql` et `sql/postgres/ddl.sql`.

### Surface REST factures — clé primaire propre

- Toutes les routes `/api/invoices/{…}` utilisent désormais `(doc, dct, kco)` directement (`/api/invoices/{doc}/{dct}/{kco}/lines`, `/lifecycle`, `/errors`, `/vat`, `/notes`, `/xml`, `/resend`, `/validate`, `/status`, ainsi que `PUT` / `DELETE`). L'identifiant composite, le helper `castToVarchar(UHDOC)` et le `||UHDCT||UHKCO` dans les WHERE disparaissent pour toute recherche par clé. Plus rapide (utilise les index) et propre côté Postgres.
- Nouveau helper `bindDoc()` qui lie le paramètre numérique `UHDOC` via `setInt` ; Postgres ne rejette plus `setString` sur une colonne `INTEGER`.

### `/invoice/view` (PDF) — recherche à double forme

- `GET /invoice/view?id=<numéro de facture UBL>` (comparé à `UHK74FLEN`) **ou** `?doc=&dct=&kco=`. La page peut être liée depuis n'importe où — y compris collée dans le navigateur — sans nécessiter d'identifiant composite.

### Refonte du générateur PDF

- `InvoicePdfGenerator` éclaté (1 027 lignes monolithiques) en un package `custom.ubl.pdf` : `PdfTheme`, `UblXmlHelpers`, `InvoiceData`, `UblParser`, `PdfDrawing`, `PdfContext`, `PdfTemplate` / `PdfTemplateEngine` / `PdfTemplateLoader` / `DefaultPdfTemplate`, registre `PdfSection`, et une classe par section sous `custom.ubl.pdf.sections/` (Header, Parties, Agent, LineTable, DocAllowances, VatBreakdown, TotalsBox, Payment, NoteBlock).
- Nouveau moteur de template JSON — les sections sont listées et réordonnées dans le modèle, chacune avec sa configuration `config` (visibilité des colonnes, bascules de sous-détails, comportement d'en-tête de groupe, saut de page par livraison, …). Édité dans **Documents → 🖼 PDF Template** : réordonnancement par glisser-déposer, drawer de configuration par section et iframe d'aperçu en direct (`POST /api/pdf-templates/preview`).
- L'override par document est stocké dans la propriété `pdfTemplate` JSON du modèle (lien via `F564231.UHTMPL`). Si vide, la mise en page par défaut est utilisée.

### Améliorations frontend

- Sidebar — nouvelle entrée **Documents** sous Gestion ; entrée *Process Document* remplaçant *Process XML* / *Process UBL* ; barre de défilement fine adaptée au thème pour atteindre les groupes en débordement (clair et sombre).
- Les placeholders de chemin (`%APP_HOME%`, `%ENV%`, `%PROCESS_HOME%`) dans la page Process Document sont résolus côté serveur avant le branchement absolu / basename, pour que les fichiers choisis via *Browse* fonctionnent même lorsque `dirInput` contient un placeholder.
- *XML — sortie spool JDE* renommé en *Spool XML* partout — le pipeline XSL est générique, seul BIP est spécifique à JDE.
- Diverses petites corrections : binding de la description sur la liste Documents, nettoyage des modales Settings, statut / send-status / email migrés vers `(doc, dct, kco)`, suppression de `augmentPromptWithSitemap` dans AiAssistant.

### Rôles / Permissions

- Nouvelle clé de page `documents` dans l'éditeur de rôles (sous **Gestion**) afin que les installations avec rôles restreints puissent autoriser ou refuser la nouvelle page.

---

## 2026.04.10 — 2026-05-04 \{#v2026-04-10\}

### Paramètres e-invoicing — configuration hybride envoi FTP / statut API

- L'onglet PA Connection masquait précédemment la configuration API (Base URL, Authentification, Récupération de statut, Planification en arrière-plan) lorsque **Send Mode = FTP**, rendant impossible une configuration hybride où les factures partent en SFTP mais où la relève des imports, la récupération des statuts et les actions vendeur passent toujours par l'API. Toutes les sections sont désormais toujours visibles ; le sélecteur de mode est renommé *Send Mode* avec un texte d'aide précisant qu'il ne pilote que le transport sortant. Chaque section non active reçoit une mention grise (*utilisé pour la récupération de statut / l'import / les actions vendeur* ou *utilisé lorsque Send Mode = FTP*) qui rend visible d'un coup d'œil le rapport entre champs et opérations.

### XSL — BT-46 (SIRET acheteur)

- Correction de `XTSE0680: Parameter siren is not declared in the called template` dans `ubl-common.xsl` : l'appel à `ubl:party-siret` passait `<xsl:with-param name="siren">` au lieu de `name="siret"` (copier-coller depuis le bloc adjacent `ubl:company-siren`).
- Correction de la validation XSD `cvc-complex-type.2.4.a` lors de l'émission de BT-46 : `<cac:PartyIdentification>` est un enfant de `<cac:Party>`, **pas** de `<cac:PartyLegalEntity>`. L'émission du SIRET sort de `ubl:party-legal-entity` (l'appel d'aide intégré était structurellement invalide) et figure désormais directement dans le bloc `cac:Party` du XSL document, avant `cac:PartyTaxScheme` / `cac:PostalAddress`. Les XSL document qui ont besoin de BT-46 doivent suivre le même schéma.
- `TAG_CUSTOMER_SIRET` (BT-46) ajouté au catalogue de l'éditeur XSL et promu dans la liste principale de la section acheteur, à côté de `TAG_CUSTOMER_SIREN` dans *Variables*.

---

## 2026.04.9 — 2026-04-30 \{#v2026-04-9\}

### Paramètres — correction de l'état d'éditeur obsolète au changement de liste

- Le passage d'un modèle à un autre ouvrait parfois l'éditeur de droite avec les lignes de la liste précédemment consultée. Deux causes : les éditeurs qui amorcent leur état interne depuis les props au montage (les 14 éditeurs de listes, StatusesEditor, DocumentTypesEditor, …) gardaient les lignes du modèle précédent car leur initialiseur `useState` ne s'exécute qu'une fois ; et `selectTemplate()` basculait `selected` immédiatement mais `props` n'était mis à jour qu'au retour du fetch, si bien que des clics rapides pouvaient acheminer un fetch obsolète vers le mauvais modèle.
- Correction : le rendu de l'éditeur est désormais enveloppé dans un `<div key={selected}>` keyé avec `display: contents`, ce qui force React à démonter l'éditeur précédent et à monter une instance fraîche à chaque sélection. `selectTemplate()` purge de manière synchrone `editData / props / rawProps` et tient un compteur de séquence de fetch, abandonnant toute réponse rendue obsolète par un clic ultérieur.

### Détail facture — bouton Télécharger UBL

- Nouveau bouton *Télécharger UBL* dans l'onglet *History* de la modale de détail facture, à côté de *Validate UBL*. Enregistre le XML UBL brut stocké dans `F564231.UHTXFT` dans un fichier local nommé `{doc}-{dct}-{kco}.xml`. Réutilise l'endpoint `GET /api/invoices/{id}/xml` et le `ublRawXml` déjà chargé dans l'état de la modale, sans appel supplémentaire. Le bouton est désactivé avec une infobulle tant que le XML n'est pas chargé.

### Assistant IA — message d'accueil automatique à la première ouverture

- L'ouverture du panneau de chat sans historique envoie automatiquement un message d'accueil localisé (*Bonjour* / *Hello* selon la langue de l'IHM), pour que l'assistant se présente et liste ses principales capacités sans que l'utilisateur n'ait à saisir une première requête. À usage unique par chargement de page : la fermeture / réouverture du panneau en cours de session ne répète pas le message d'accueil, et les conversations existantes sont préservées.

---

## 2026.04.8 — 2026-04-29 \{#v2026-04-8\}

### Assistant IA — outil d'historique de cycle de vie + délégation REST

- Nouvel outil local `lifecycle_history` : retourne toutes les transitions de statut d'une facture issues de F564235 (séquence, code statut + libellé, message, date / heure, motif de rejet PA + libellé, action attendue + libellé, note de statut) — même charge utile que celle rendue par l'onglet *History* de la modale de détail facture. Permet à l'IA de répondre à *« pourquoi la facture X a-t-elle été rejetée / qu'a dit la PA »* sans recourir à *« je n'ai pas accès à cet historique »*.
- `validation_errors` et `lifecycle_history` délèguent désormais aux gestionnaires REST existants `WebApiHandler.handleInvoiceErrors` / `handleInvoiceLifecycle` (l'onglet *History* de l'IHM React appelle les mêmes endpoints). Le SQL dupliqué dans les outils IA a été supprimé, ce qui fait bénéficier l'IA des noms de tables configurables `UBLTableConfig`, des requêtes adaptées au dialecte (Oracle vs Postgres) et de la résolution de libellés de statut maintenue côté REST. Une seule source de vérité.
- Les catalogues complets de statuts factures + e-reporting sont désormais ajoutés au prompt système au moment de la conversation (lus dans `InvoiceStatusCatalog` et `EReportingStatusCatalog`, ce qui propage les personnalisations utilisateur). Le modèle devinait des codes à partir d'expressions comme *litige* (49 au lieu du vrai 207) — il dispose désormais de la table en contexte et utilise le code exact avec `list_invoices` / `list_ereports`.
- `AIChatPanel` : la zone de saisie reprend le focus dès que l'assistant a fini de diffuser sa réponse, supprimant la nécessité de cliquer à nouveau dans le champ pour poser la question suivante.

---

## 2026.04.7 — 2026-04-29 \{#v2026-04-7\}

### Assistant IA — correction de `url_not_allowed` sur web_fetch

- Le `web_fetch` d'Anthropic ne télécharge que les URL apparues précédemment dans des messages utilisateur ou des résultats d'outils antérieurs. L'injection sitemap de 2026.04.6 plaçait les URL dans le prompt système où elles ne comptent pas, si bien que chaque fetch retournait `url_not_allowed`. Une première tentative d'exposer le catalogue via un outil personnalisé `list_docs_pages` retournant du JSON a aussi échoué — l'extracteur d'URL d'Anthropic scanne le contenu de `tool_result` en texte brut et ne reconnaît pas les URL encadrées par des guillemets JSON.
- Correction finale : `list_docs_pages` retourne désormais le sitemap en **texte brut**, une URL par ligne. L'extracteur Anthropic les capture, et l'appel `web_fetch` qui suit aboutit. Claude suit un parcours en deux étapes propre : `list_docs_pages` → `web_fetch` → réponse.
- Les appels d'outils serveur + leurs résultats sont désormais affichés dans le chat sous forme de pastilles en ligne (📖 `web_fetch · <url>`, 📥 `web_fetch_result · ✓ <url>` ou ❌ `<error_code>`), rendant visibles les modes d'échec auparavant absorbés silencieusement — ce qui a précisément permis de déboguer le problème JSON-vs-texte.

---

## 2026.04.6 — 2026-04-29 \{#v2026-04-6\}

### Assistant IA — recherche documentaire pilotée par le sitemap

- Le modèle savait qu'il pouvait récupérer `docs.nomana-it.fr` mais ignorait quelles URL existaient ; il devinait et ratait, ou abandonnait et répondait depuis ses connaissances antérieures. Le backend récupère désormais `sitemap.xml` une fois au démarrage, filtre les entrées au préfixe documentaire (par défaut `https://docs.nomana-it.fr/nomaubl`), et injecte la liste de pages obtenue dans le prompt système — ce qui amène le modèle à choisir une URL réelle plutôt qu'à deviner.
- Le sitemap est mis en cache pendant 6 heures et plafonné à 200 pages. Les échecs sont silencieux (le snapshot précédent reste en service) et ne bloquent jamais l'appel chat.
- Deux nouvelles propriétés `global` optionnelles : `aiDocsSitemapUrl` (par défaut `https://docs.nomana-it.fr/sitemap.xml`, vide pour désactiver l'injection sitemap) et `aiDocsPathPrefix` (par défaut `https://docs.nomana-it.fr/nomaubl`).

---

## 2026.04.5 — 2026-04-29 \{#v2026-04-5\}

### Assistant IA — correction de compatibilité ascendante pour web_fetch

- Les configurations existantes antérieures à 2026.04.4 ne disposent pas de la nouvelle propriété `aiDocsDomains` dans leur modèle `global`, si bien que l'assistant démarrait sans outil `web_fetch` et indiquait (à raison) qu'il n'avait pas accès à la documentation.
- Nouvelle sémantique pour `aiDocsDomains` dans `AiAssistant` : propriété absente → valeur par défaut `docs.nomana-it.fr` (compatibilité ascendante — aucune édition manuelle requise) ; chaîne vide → désactivation explicite ; `"a,b,c"` → utilisation de cette liste. Aucun changement de BDD ni d'API ; uniquement une valeur par défaut côté serveur.

---

## 2026.04.4 — 2026-04-29 \{#v2026-04-4\}

### Assistant IA — utilisation d'outils (recherche documentaire + outils de données en lecture seule)

- Le panneau de chat permet désormais au modèle d'appeler des outils en cours de conversation au lieu de répondre uniquement depuis ses connaissances antérieures. Deux couches : recherche documentaire via l'outil serveur `web_fetch_20250910` d'Anthropic, avec `allowed_domains` verrouillé sur la liste `global.aiDocsDomains` (par défaut `docs.nomana-it.fr`) ; et outils opérationnels en lecture seule exécutés localement contre la même base que l'IHM (`list_invoices`, `explain_status_code`, `validation_errors`, `list_ereports`). Activable via `global.aiToolsEnabled` (par défaut Y).
- Nouveau `global.anthropicSystemPrompt` qui surcharge le prompt système intégré. Vide = utiliser le défaut intégré qui décrit le produit, indique l'URL documentaire au modèle et liste les plages de codes statut (1373 / 99xx / 9950 – 9957).
- Backend récrit dans `AiAssistant.java` : boucle agentique avec jusqu'à 5 tours d'outils, diffuse les deltas de texte sous forme `{type:"token"}` et expose les invocations d'outils sous forme `{type:"tool_call",name,summary}` afin que l'IHM affiche une pastille en ligne (📖 web_fetch, 🔍 outil local) au-dessus de la bulle assistant pendant que l'appel est en cours.
- Paramètres → System → Global → onglet AI : trois nouveaux champs (System Prompt textarea, Allowed Doc Domains liste séparée par virgules, Custom Tools Y/N).
- Les réponses de l'assistant sont désormais rendues en Markdown via `react-markdown` + `remark-gfm` : titres, gras, listes, tableaux GFM, blocs de code, code en ligne et liens s'affichent correctement. Les liens externes s'ouvrent dans un nouvel onglet.

Voir [Capacités IA](./application/ai-capabilities.md) pour la référence utilisateur complète.

---

## 2026.04.3 — 2026-04-29 \{#v2026-04-3\}

### XML E-Reporting — conformité à la spécification Flux 10

- `EReportingXmlBuilder` réécrit pour respecter la nomenclature officielle FNFE-MPE Flux 10 (TT-1..TT-99, TG-8..TG-39). Les anciens noms personnalisés (`<Identifier>`, `<DocumentType>`, `<Flux>`, `<Period>`, `<Customer>`, `<Totals>`, `<TaxBreakdown>`) sont remplacés par ceux de la spec : `<Id>`, `<IssueDateTime><DateTimeString>`, `<TypeCode>`, `<Sender><Id schemeId>+<Name>+<RoleCode>`, `<Issuer><Id schemeId>+<Name>+<RoleCode>`, `<TransactionsReport><ReportPeriod><StartDate>+<EndDate>`. Les dates sont émises au format `yyyymmdd` (période) et `yyyymmddhhmmss` (date d'émission), sans séparateur.
- Application stricte de la règle **G6.28** de routage B2C / B2BINT : les transactions B2C n'émettent **jamais** de bloc `<Invoice>` individuel — seuls des blocs `<Transactions>` agrégés sont produits (un par CategoryCode + devise, avec des `<TaxSubtotal>` imbriqués portant TaxPercent / TaxableAmount / TaxTotal). Le B2BINT continue d'émettre un `<Invoice>` par facture avec ID, IssueDate, TypeCode, CurrencyCode, Seller (déclarant), Buyer (contrepartie), MonetaryTotal, et `<TaxSubTotal>` par taux.
- Conformément à **G6.23**, tout `TaxAmount` / `TaxTotal` est désormais exprimé en EUR (l'attribut `currencyId` est verrouillé sur `EUR`) quelle que soit la devise de la facture source. Les montants taxables conservent la devise d'origine.
- `<Transactions><CategoryCode>` (TT-81) restreint au sous-ensemble de la spec : `TLB1` (livraisons de biens taxables), `TPS1` (prestations de services taxables), `TNT1` (non taxable), `TMA1` (régime de la marge) ; bascule automatiquement sur `TLB1` / `TNT1` selon le taux quand la ligne source contient une valeur hors-liste.
- Nouvelles propriétés optionnelles du template `e-reporting` : `senderName`, `senderRoleCode` (par défaut `WK`), `issuerName`, `issuerSchemeId` (par défaut `0002`, avec `0223` / `0227` / `0228` / `0229` pour les cas internationaux), `issuerRoleCode` (`SE` / `BY`), `businessProcessId` et `businessProcessTypeId` (TT-28 / TT-29 émis sur le `<BusinessProcess>` par facture en B2BINT uniquement), et `flowName` (TT-2). L'éditeur Settings → Système → E-Reporting expose ces champs en trois sections groupées : Sender (PA), Issuer (Déclarant), Business Process.
- `<ReportDocument><Id>` est désormais initialisé par défaut à `{siren}-{flux}-{début}-{fin}` quand aucun identifiant de transmission n'est fourni — une valeur stable par période contre laquelle la PA peut dédupliquer.
- Catalogue de statuts dédié à l'e-reporting (codes **9950 – 9957**), indépendant de la plage invoice 99xx. Le nouveau `EReportingStatusCatalog` charge le nouveau template système `ereporting-statuses` (libellés FR / EN éditables dans **Settings → Système → ereporting-statuses**, en parallèle du template `statuses` existant). Codes : `9950 EREPORT_CREATED`, `9951 EREPORT_SUBMIT_SKIPPED`, `9952 EREPORT_SENT_TO_PA`, `9953 EREPORT_PENDING`, `9954 EREPORT_ERROR_SENT`, `9955 EREPORT_DEPOSITED`, `9956 EREPORT_FAILED_IMPORT`, `9957 EREPORT_REJECTED`. Le catalogue se réamorce automatiquement avec des valeurs par défaut intégrées si le template est absent, donc les installations existantes continuent de fonctionner sans migration manuelle. `EReportingHandler` réécrit pour utiliser ces codes (auparavant il réutilisait ceux des factures) ; le cas « envoi PA désactivé » pose désormais son propre code au lieu de réutiliser `STATUS_CREATED`.
- `EReportingFetcher` lit désormais les sous-totaux de TVA principalement depuis le XML UBL stocké dans `F564231.UHTXFT` (parse les nœuds `cac:TaxTotal/cac:TaxSubtotal` au niveau document — les sous-totaux par ligne sont ignorés pour éviter le double comptage). Le comportement précédent (lecture de `F564234`) est conservé en repli, pour que les déploiements qui ne matérialisent pas la table de récapitulatif TVA puissent malgré tout produire des reports. Corrige le symptôme « bloc `<Transactions>` vide » sur les reports B2C lorsque `F564234` n'était pas alimentée alors que les factures et leur XML UBL étaient bien stockés.

### Settings → éditeurs de listes (perte de focus à la saisie)

- Correctif appliqué à **15** éditeurs de listes (Statuses, Countries, ActionCodes, CurrencyCodes, CustomizationIds, InvoiceTypes, PaymentMeans, NoteTypes, DocumentReferenceCodes, RejectionReasonCodes, SchemeIds, UnitCodes, ProfileIds, VatexCodes, VatCategories) : la saisie dans n'importe quelle ligne perdait le focus après chaque caractère — et toute nouvelle ligne ne pouvait pas être remplie.
- Cause : chaque éditeur disposait d'un `useEffect(() => setRowsState(...), [props])` qui reconstruisait l'état local des lignes à partir des props du parent à chaque render. Comme l'éditeur lui-même renvoie les lignes au parent à chaque frappe (et le parent re-render), un aller-retour était créé qui recomposait le tableau de lignes → React démontait / remontait les inputs → le curseur était éjecté. Pire, `*RowsToProps` filtre les lignes dont la clé / code est vide : toute nouvelle ligne disparaissait des props du parent dès la première frappe hors de la colonne clé.
- Correctif : suppression de la synchronisation props → rows. Chaque éditeur ensemence ses lignes à partir des props une seule fois au montage et reste l'unique écrivain ensuite. Les clés React restent liées à l'index du tableau, ce qui préserve l'identité des inputs des lignes existantes entre les renders.
- Pour `StatusesEditor` spécifiquement, les champs `type` et `description` du template sont désormais préservés lors de l'écho vers le parent (ils étaient silencieusement supprimés, ce qui corrompait le template `statuses` à la sauvegarde).

### Refonte du schéma E-Reporting

- Renommage des colonnes des tables F564240 / F564241 / F564242 selon la structure JDE fournie :
  - F564240 : `RGDOC → RGUKID` (PK = RGUKID seul, sans composante flux / kco ; déclarée en `NUMBER(15)` sur Oracle / `BIGINT` sur Postgres dans le DDL statique et dans `AuthManager.initTables`), `RGFLUX → RGY56BAR`, `RGTYPCD → RGDCT`, `RGPSTART → RGEFTJ`, `RGPEND → RGEFDJ`, `RGISSUID → RGY56EPID`, `RGINVCNT → RGNINV`. **Suppression** de `RGSENDID` (l'émetteur reste dans la config + l'XML, non persisté) et `RGUKIDSZ` (l'UUID PA n'est plus stocké — la submission est tracée via le statut + le cycle de vie uniquement).
  - F564241 : la colonne FK vers F564240 conserve le préfixe parent (`RGUKID`) ; `RHFLUX → RHY56BAR` ; suppression de `RHKCO` (la KCO se récupère via la table parente). PK = `(RGUKID, RHSEQN)`.
  - F564242 : la FK est `RGUKID` ; `RIFLUX → RIY56BAR` ; suppression de la colonne report-`RIKCO`. Le triplet facture perd l'infix `INV` : `RIINVDOC / RIINVDCT / RIINVKCO → RIDOC / RIDCT / RIKCO`. PK = `(RGUKID, RIDOC, RIDCT, RIKCO)`.
- Mêmes changements dans le DDL Oracle, le DDL Postgres et `AuthManager.initTables` (le bouton **Initialize Database** crée donc la nouvelle structure).
- `EReportingDatabaseHandler` : renommage du champ `rgdoc → rgukid` ; `kco` n'est plus porté par le handler (seul F564240 le contient, fixé au moment de l'insertReport). `nextSequence()` fait désormais `MAX(RGUKID) + 1` (globalement unique). Signature `insertReport(typeCode, kco, …)` : paramètre `senderId` supprimé. `updatePATransactionId()` supprimé (colonne disparue). Tous les INSERT enfants mis à jour avec les nouveaux noms de colonnes.
- La sous-requête NOT EXISTS de `EReportingFetcher` réécrite avec les nouvelles colonnes `RIDOC / RIDCT / RIKCO / RIY56BAR`.
- API REST simplifiée : `/api/ereporting/{flux}/{kco}/{rgdoc}` → **`/api/ereporting/{rgukid}`**. `/api/ereporting/{flux}/{kco}/{rgdoc}/resend` → **`/api/ereporting/{rgukid}/resend`**. JSON renvoyé : `rgdoc` → `rgukid` ; champs `sender` et `paUuid` supprimés.
- Types frontend, client API, page liste, modale de détail, colonnes et i18n mis à jour en conséquence (le resend renvoie une fois l'UUID PA dans sa réponse, conservé pour l'afficher dans le bandeau de succès).
- Modale de détail → onglet Factures : suppression de la colonne *Numéro*. Le triplet DOC / DCT / KCO est l'identifiant canonique ; le numéro UBL n'était qu'une copie d'affichage de la même donnée, retirée avec sa clé i18n, le champ `invoiceNumber` de `EReportInvoiceLink` et la jointure `UHK74FLEN` côté backend.

### Dashboard / Carte « À propos »

- Le schematron EXTENDED-CTC-FR est désormais listé dans la carte *À propos de cette version* (clé `frExtendedCtc`, libellé *EXTENDED-CTC-FR*) — il était livré dans le JAR mais absent de `/api/build-info`.
- `BuildInfo` extrait désormais en priorité l'estampille FNFE-MPE (`Schematron yyyymmdd_NAME_VX.Y.Z …`) **avant** le motif générique `Schematron version X.Y.Z` ; Flux 2 et Extended-CTC-FR intègrent tous deux la version source EN 16931 (1.3.15) dans leurs commentaires, ce qui induisait précédemment le parseur en erreur.
- Restriction de la date EN 16931 à un format ISO `yyyy-mm-dd` strict, supprimant le `--` parasite hérité du `--&gt;` de fermeture du commentaire.

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Validation

- Correctif : la re-validation d'une facture existante depuis **InvoiceDetailModal → Historique** (ainsi que le chemin `validateUblDirect`) échouait avec `cvc-elt.1.a: Cannot find the declaration of element 'Invoice'`. La `DocumentBuilderFactory` utilisée pour parser l'UBL n'était pas namespace-aware par défaut, et le validateur XSD ne pouvait donc pas associer `<Invoice>` / `<CreditNote>` au schéma UBL 2.1. `setNamespaceAware(true)` est désormais positionné sur les deux instances de parser.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### Journal des traitements

- Le traitement UBL écrit désormais une paire `START` / `END` dans `F564237` afin que le Journal des traitements couvre ProcessUBL (`/api/process-ubl`), fetch-invoices en mode UBL et le CLI `-ubl` — comme le faisait déjà `-xml`. `FEMODE = PROCESS` pour ces lignes ; `FETMPL` reste vide (aucun template de document ne s'applique au traitement UBL).

### Page Validation UBL

- Correctif : l'upload d'un fichier UBL ne tombe plus dans `<input>/_ubl/` (substitution littérale de la sentinelle `_ubl`). L'upload utilise désormais le dossier conventionnel `<input>/ubl/`, en cohérence avec les endpoints fetch / list-files.
- Correctif : la validation d'un fichier UBL uploadé n'échoue plus avec `No such file or directory`. Le nom de base présent dans le formulaire est résolu vers `<dirInput>/ubl/` avant parsing ; les chemins absolus issus du navigateur de fichiers continuent de fonctionner.

### Validation

- Nouveau schematron **EXTENDED-CTC-FR** (FNFE-MPE `EXTENDED-CTC-FR-UBL-V1.3.0`) embarqué et câblé dans `UBLValidator`.
- Le schematron français appliqué est désormais piloté par `cbc:CustomizationID` (BT-24). Lorsque l'URN contient `EXTENDED` / `extension`, la règle EXTENDED-CTC-FR est exécutée **à la place de** EN 16931 + CIUS-FR (sur-ensemble dérivé qui assouplit volontairement certaines règles EN 16931 — `UBL-CR-550` est par exemple commentée pour autoriser `InvoiceLine/Delivery`). Pour toutes les autres valeurs, le comportement précédent est conservé : base EN 16931 + surcouche CIUS-FR (BR-FR Flux 2). CPRO-B2G continue de s'auto-déclencher sur `cbc:Note` `#ADN#B2G` quel que soit le profil.

### Configuration / UBL Defaults

- Nouvelle liste système `customization-ids` (BT-24) pré-remplie avec les URN françaises standard (base EN 16931, FNFE-MPE Basic / Extended CTC, Factur-X Minimum / Basic / Basic WL / Extended, Peppol BIS Billing 3) — pleinement éditable depuis **Settings → Customization IDs**.
- **UBL Defaults → Header** : BT-24 est désormais une liste déroulante alimentée par la liste `customization-ids` (la saisie libre reste accessible en repli si la liste est vide ou si la valeur n'est pas enregistrée).

### Mode replace

- Le retraitement en mode replace purge désormais `F564235` (cycle de vie) et `F564236` (erreurs de validation) en plus de `F564231` / `F564233` / `F564234`. Auparavant ces deux tables append-only continuaient à croître à chaque rejeu, mêlant un historique de cycle de vie périmé et des erreurs de validation obsolètes aux données du dernier run.
- Nouvelle méthode `UBLDatabaseHandler.purgeForReplace()` qui efface en une seule fois les cinq tables UBL pour un `(doc, dct, kco)` donné. Appelée par `UBLInvoiceProcessor.process` (chemin UBL) et `CustomUBL` (chemin XML) dès que `replaceMode=true`, de sorte que les deux chemins ont désormais une sémantique replace identique, quelle que soit la présence de la ligne F564230 préexistante.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

### E-Reporting (Flux 10.1 / 10.3)

- Nouvelle page **E-Reporting** au premier niveau : liste, modale de détail, dialogue de génération.
- Nouvelles tables `F564240`, `F564241`, `F564242` (configurables dans le paramétrage `db-nomaubl` ; créées par **Initialize Database**).
- Nouveau template système `e-reporting` + surcharges par société `e-reporting-{kco}` ; la soumission réutilise le token PA de `e-invoicing[-{kco}]` via le nouvel endpoint `report-import`.
- CLI : `-ereporting <config> [start=AAAAMMJJ] [end=AAAAMMJJ] [kco=...] [flux=10.1,10.3] [type=IN]`.
- Ordonnanceur d'arrière-plan : nouvelle tâche `ereportingInterval` dans `global`.
- Modale de détail : l'onglet Factures utilise un `DataTable` avec export CSV / Excel.
- Modale de détail : bouton de téléchargement du XML généré (remplace l'onglet XML inline).

### Journal des traitements

- Nouvelle entrée **Processing Log** sous le menu *Management*, basée sur `F564237`.
- Vue groupée (par défaut) : chaque traitement est replié sur une seule ligne `START → END` avec badge de statut, durée et liste dépliable des étapes intermédiaires ; la vue à plat est conservée pour les utilisateurs avancés.
- Barre d'outils : listes déroulantes pour **Mode** et **Modèle**, sélecteur de période (défaut : 7 derniers jours), recherche par nom de fichier.

### Dashboard

- Nouvelle carte **À propos de cette version** ancrée en bas du dashboard avec le numéro de version, la date de build, la version du profil AFNOR et les versions de chaque module Schematron (EN 16931, BR-FR Flux 2, BR-FR CPRO).

### Documentation

- Nouvelle page **Notes de version** (menu Documentation) qui affiche ce fichier.
- Maintenue en deux langues — `RELEASE.md` (anglais) et `RELEASE.fr.md` (français) embarqués dans le JAR ; la page sélectionne la bonne en fonction de la langue active de l'IHM.
- Sommaire en haut de page avec une vignette par version cliquable.
- Rendu Markdown maison avec prise en charge de la continuation paresseuse des listes (les puces réparties sur plusieurs lignes sont rendues comme un seul élément).

### Settings

- L'éditeur `db-nomaubl` expose les trois nouveaux noms de tables e-reporting (`tableEReporting`, `tableEReportingHist`, `tableEReportingMap`), avec les valeurs par défaut `F564240` / `F564241` / `F564242`.
- L'action **Initialize Database** crée désormais les trois tables e-reporting en plus des tables UBL / auth existantes.
- Le sélecteur de pages dans l'écran **Rôles** expose les nouvelles pages `processinglog` et `releasenotes` afin de pouvoir y donner accès aux rôles existants.

### Backend

- Défauts `DatabaseDialect.writeText` / `readText` — le XML est stocké en `CLOB` (Oracle) / `TEXT` (PostgreSQL) via `setString` / `getString` portables (évite le piège pgjdbc `getClob → OID`).
- `nodeToBytes` dans `UBLDatabaseHandler` force désormais `OutputKeys.INDENT="no"` afin que le XML écrit dans `F564230.FETXFT` ne soit pas pretty-printé par Saxon en mode fat-jar (même correctif que celui déjà appliqué à l'UBL).
- `/api/build-info` (public) retourne les métadonnées de version + les fichiers `RELEASE.md` / `RELEASE.fr.md` embarqués.

---

## 1.0.0 — Version initiale \{#v1-0-0\}

NomaUBL est une plateforme e-invoicing Java 17 + React qui transforme les sorties ERP (JD Edwards, SAP, NetSuite, ERP personnalisé) en documents **UBL 2.1** conformes, les valide, les soumet à une **Plateforme Agréée (PA)** française et trace l'intégralité du cycle de vie des factures.

### Pipeline principal (ERP source → UBL → PA)

- **Extraction du XML JDE** depuis la file d'attente BIP (`F95630` / `F95631` / `F9563110`), l'archive JDE, en SFTP ou depuis le système de fichiers local ; routage par template de type de document (`invoices`, `credit_notes`, …).
- **Transformation XSLT 2.0** via Saxon-HE — produit des factures et avoirs UBL 2.1 à partir d'un framework XSL configurable (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation** : XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) et **BR-FR CPRO** (Chorus Pro pour le B2G), avec gestion des sévérités (`fatal`, `error`, `warning`, `info`).
- **Soumission PA** en HTTP (Java 11 `HttpClient`), token OAuth2 mis en cache et auto-rafraîchi sur 401, plus un canal SFTP de secours.
- **Surcharges PA par société** via les templates `e-invoicing-{kco}` — credentials, endpoints et tokens indépendants par société émettrice.
- **Pré-vérification annuaire PPF** (non bloquante) via le template `e-directory` — recherche le client avant envoi et signale en avertissement les destinataires injoignables.
- **Génération PDF** via Oracle BI Publisher (`oracle.xdo`) avec post-traitement Ghostscript optionnel, et embarquement iText du PDF en `cac:AdditionalDocumentReference` dans l'UBL.
- **PA factice** (`paUseMock=Y`) avec scénarios succès / échec / token expiré pour les tests bout-en-bout sans plateforme réelle.

### Stockage des documents, statuts et cycle de vie

Schéma Oracle / PostgreSQL (configurable dans `db-nomaubl`) :

| Table | Rôle |
|---|---|
| `F564230` | Archive source — XML JDE original, drapeaux de traitement |
| `F564231` | Entête UBL — champs BT-* EN 16931, XML UBL généré, statut courant |
| `F564233` | Lignes UBL |
| `F564234` | Synthèse TVA par catégorie / taux |
| `F564235` | Événements de cycle de vie (historique) |
| `F564236` | Erreurs de validation XSD / Schematron |
| `F564237` | Journal de traitement runtime (un événement START / END / erreur par ligne) |
| `F564250` / `F564251` / `F564252` | Utilisateurs / Rôles / Sessions |

- **DDL adaptée au dialecte** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) et PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- L'action **Initialize Database** dans *Settings* crée tout le schéma et provisionne les rôles `admin` / `viewer` par défaut.
- **Dates JDE Julian** stockées en entiers (`CYYDDD - 1900000`) et converties à la volée pour l'IHM.

### Catalogue de statuts factures

- 30+ codes couvrant le cycle de vie complet **AFNOR XP Z12-014 V1.3** : `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus les états litige, factoring et erreurs de routage.
- Codes workflow internes (`9900` – `9907`) et codes UNTDID 1373 mappés à la PA (`1`, `8`, `10`, `37`, `43`, `45` – `51`).
- Tous les codes / libellés / mappings PA sont **pilotés par les données** depuis le template système `statuses` — éditables dans *Settings*.
- `StatusTransition.apply()` met à jour `F564231` et insère un événement `F564235` en un seul appel.

### CLI

Modes interactifs et batch — tous pilotés par un unique `config.json` :

| Mode | Rôle |
|---|---|
| `-config` | Ouvre l'IHM Swing (FlatLaf dark) |
| `-xml` | Traite des fichiers XML JDE : SINGLE / BURST / UBL / AUTO |
| `-ubl` | Valide + charge en base des fichiers UBL existants |
| `-fetch-single`, `-fetch-all` | Récupère depuis BIP / archive / répertoire + traitement |
| `-fetch-import` | Interroge la PA sur le statut des factures en attente (9906) |
| `-fetch-status` | Récupère les événements de cycle de vie depuis la PA et met à jour la base |
| `-extract` | Extrait les fichiers d'entrée / sortie d'un job BIP JDE |
| `-serve` | Serveur HTTP embarqué + ordonnanceur d'arrière-plan |
| `-install` | Provisionne l'arborescence d'un environnement |
| `-password` | Encode un mot de passe pour stockage |
| `-updUser` | Met à jour l'utilisateur JDE sur les jobs soumis |

### IHM Web (React 19 + Vite)

- **Dashboard** avec compteurs de statuts, tuile d'erreurs d'intégration, actions rapides et infos licence / version.
- **Factures** — liste paginée + filtrable, modale de détail (Résumé, Parties, Lignes, TVA, Notes, Historique, PDF), création / édition / copie / renvoi en place, set-statut (PA ou DB seul), envoi e-mail avec PDF en pièce jointe.
- **Erreurs d'intégration** — toutes les lignes de validation `F564236` sans facture associée (soumissions cassées).
- **Extract & Process** — récupération unitaire et batch depuis BIP, FTP, archive ou fichiers locaux.
- **Process UBL** — chargement et validation d'UBL XML existants.
- **Validate** — testeur XSD + Schematron pour des fichiers UBL ad hoc.
- **XSL Editor** — éditeur Monaco avec navigateur XML, sélecteur de variables conscient du template et installeur de framework par template.
- **XML Viewer** — visualiseur / formatteur Monaco avec chargement local + serveur et sauvegarde.
- **UBL Defaults** — valeurs par défaut par société (devise, moyens de paiement, catégories TVA, etc.).
- **Référentiel des statuts** — référence complète AFNOR XP Z12-014 V1.3.
- **Codes motifs** — référence complète AFNOR XP Z12-012 Annexe A.
- **Référentiel UBL** — glossaire BT-*.
- **Versions fichiers** — historique des versions adossé à SQLite pour les fichiers XSL / XSD / Schematron / RTF / config éditables, avec upload / restauration / téléchargement.

### Settings (gestionnaire de configuration)

- Édition à chaud de `config.json` depuis le navigateur. Templates système : `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Listes de codes : `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Templates de type de document : par document RTF / XSL / clé de burst / routage / type de traitement.
- Templates de connecteurs API avec substitution de placeholders (`{{username}}`, `{{token}}`, `{{content}}`, …) et auth pluggable (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Surcharges par société `e-invoicing-{kco}`.

### Authentification & RBAC

- Tables intégrées utilisateur / rôle / session (`F564250` – `F564252`).
- Hashs **PBKDF2-HMAC-SHA256**, changement de mot de passe forcé à la première connexion, liste blanche de pages par rôle et filtre par société par rôle.
- Activable via `authEnabled` dans `global` (off → pas de login).
- Rôles `admin` (complet) et `viewer` (lecture seule restreinte) provisionnés par défaut au **Initialize Database**.

### Ordonnanceur d'arrière-plan

Piloté depuis `global.fetch*Interval` (minutes — 0 désactive) :

- `fetchImportInterval` — polling périodique du statut import PA.
- `fetchStatusInterval` — récupération périodique du cycle de vie PA.
- `fetchAll.N.{interval,label,params}` — plusieurs jobs batch de traitement de documents.

### API HTTP embarquée

Un serveur REST + statique minimal (`com.sun.net.httpserver`) sert le bundle React sur `/` et expose `/api/*` pour les factures, templates, fetch / extract, validation, système de fichiers, licence, packaging, authentification, et la documentation OpenAPI sur `/api/docs`.

### E-mail & i18n

- Envoi SMTP (TLS / SSL) avec PDF en pièce jointe par facture.
- Traductions français / anglais complètes dans toute l'IHM.

### Licence

- Licences JWT signées RS256 vérifiées au runtime via une clé publique PEM embarquée — modes `full` (toutes fonctionnalités) ou `restricted` (vues lecture seule).
