---
title: Packages
description: "Transporter la configuration d'une installation Liberty vers une autre avec la page Paquet : choisir comme points de départ des écrans, entrées de menu, tableaux de bord, modèles de l'explorateur, tâches, règles de notification, services ou contenus de l'assistant ; le résolveur de dépendances parcourt tout ce qu'ils atteignent et le paquet est exporté en ZIP — ou promu directement vers une autre instance. Sur la cible, l'import est d'abord présenté élément par élément, avec le détail des champs, avant d'être appliqué."
keywords: [Liberty Framework, package, export, import, aperçu, promotion, instance cible, déploiement, ZIP, clôture de dépendances, points de départ, merge, overwrite, replace all, override, secrets chiffrés, build-package, import-package]
---

# Packages

La page **Paquet** (*Liberty Next → Déployer → Paquet*) est le mécanisme de déploiement intégré de Liberty : un opérateur sur l'installation **source** sélectionne quelques écrans / entrées de menu / tableaux de bord comme *points de départ*, le framework parcourt chaque référence atteinte (requêtes, connecteurs, entrées de dictionnaire, graphiques) et le résultat est livré sous forme de ZIP. Sur l'installation **cible**, le même écran accepte un ZIP, présente ce qu'il changerait, puis l'applique à la configuration active — suivi d'un rechargement automatique. Une fois une instance cible déclarée, le paquet peut aussi lui être **promu** directement, sans manipuler le ZIP.

La page propose trois vues, choisies dans des cartes en haut de page : **Construire un paquet**, **Importer un paquet** et **Promotion**. Elle est réservée aux superutilisateurs.

C'est le parcours standard *préproduction → production*. C'est aussi l'outil adapté à la réutilisation inter-clients : construire un package « starter » d'écrans sélectionnés, le remettre à une nouvelle installation, l'appliquer avec `replace_all`, et c'est terminé.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pkgb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pkgb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pkgb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pkgb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="470" rx="14" fill="url(#pkgb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paquet</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="276.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Construire un paquet</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Choisir des écrans et leurs dépendances, télécharg…</text>
  <rect x="522.0" y="74" width="276.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="531.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="541.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="558.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Importer un paquet</text>
  <text x="558.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Appliquer un paquet zip à cette instance</text>
  <rect x="808.0" y="74" width="276.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="817.0" y="84" width="20" height="20" rx="5" fill="#fb923c" fillOpacity="0.18"/>
  <circle cx="827.0" cy="94" r="4" fill="none" stroke="#fb923c" strokeWidth="1.4"/>
  <text x="844.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Promotion</text>
  <text x="844.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Instances cibles et promotions appliquées</text>
  <rect x="974" y="126" width="110" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1029.0" y="141.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">➚ Promouvoir vers…</text>
  <rect x="828" y="126" width="140" height="24" rx="5" fill="url(#pkgb-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="898.0" y="141.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger le ZIP (6)</text>
  <rect x="747" y="126" width="75" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="784.5" y="141.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Effacer (1)</text>
  <rect x="236" y="126" width="499" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="141.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Filtrer les points de départ</text>
  <text x="250" y="182" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">POINTS DE DÉPART</text>
  <text x="356.8" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 1 sélectionné(s)</text>
  <text x="640.0" y="182" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">tout sélectionner</text>
  <line x1="236" y1="192" x2="654.0" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="212" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ÉCRANS · 1/24</text>
  <text x="640.0" y="212" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout sélectionner</text>
  <text x="250" y="230" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">CRM</text>
  <rect x="258" y="244" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="253" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="253" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">contacts</text>
  <text x="335.12" y="253" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Contacts</text>
  <rect x="246" y="262" width="398.0" height="22" rx="5" fill="rgba(255,255,255,0.05)"/>
  <rect x="258" y="268" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M260.5,273.5 L262.8,275.8 L266.8,271" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="275" y="277" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="277" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">customers</text>
  <text x="341.01" y="277" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Clients</text>
  <rect x="258" y="292" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="301" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="301" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">orders</text>
  <text x="323.34" y="301" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Commandes</text>
  <rect x="258" y="316" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="275" y="325" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="325" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">products</text>
  <text x="335.12" y="325" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">— Produits</text>
  <text x="250" y="344" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENTRÉES DE MENU · 0/18</text>
  <text x="250" y="366" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">TABLEAUX DE BORD · 0/3</text>
  <text x="250" y="388" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">TÂCHES NOMAFLOW · 0/6</text>
  <text x="250" y="410" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SERVICES · 0/4</text>
  <text x="680.0" y="182" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DÉPENDANCES</text>
  <text x="755.3" y="182" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 6/8 sera inclus dans le paquet</text>
  <line x1="666.0" y1="192" x2="1084.0" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="680.0" y="212" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ÉCRANS · 1/1</text>
  <text x="1070.0" y="212" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout désélectionner</text>
  <rect x="688.0" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,230.5 L692.8,232.8 L696.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="234" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers</text>
  <text x="680.0" y="252" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">CONNECTEURS · 0/1</text>
  <text x="1070.0" y="252" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout sélectionner</text>
  <rect x="688.0" y="265" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="705.0" y="274" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="680.0" y="292" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">POOLS · 0/1</text>
  <text x="1070.0" y="292" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout sélectionner</text>
  <rect x="688.0" y="305" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="705.0" y="314" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">crm</text>
  <text x="680.0" y="332" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">REQUÊTES · 3/3</text>
  <text x="1070.0" y="332" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout désélectionner</text>
  <rect x="688.0" y="345" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,350.5 L692.8,352.8 L696.8,348" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="354" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers_get</text>
  <rect x="688.0" y="365" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,370.5 L692.8,372.8 L696.8,368" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="374" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.customers_put</text>
  <rect x="688.0" y="385" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,390.5 L692.8,392.8 L696.8,388" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="394" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.lookup_country</text>
  <text x="680.0" y="412" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ÉLÉMENTS DU DICTIONNAIRE · 2/2</text>
  <text x="1070.0" y="412" fill="#4a9eff" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">tout désélectionner</text>
  <rect x="688.0" y="425" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,430.5 L692.8,432.8 L696.8,428" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="434" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.CUSTOMER_ID</text>
  <rect x="688.0" y="445" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M690.5,450.5 L692.8,452.8 L696.8,448" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="705.0" y="454" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">crm.COUNTRY</text>
  <rect x="236" y="162" width="418.0" height="314" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="666.0" y="162" width="418.0" height="314" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois vues</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">construire, importer, promotion</text>
  <line x1="200" y1="77.0" x2="236" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtrer, puis tout cocher</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seulement ce qui correspond</text>
  <line x1="200" y1="167.0" x2="236" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cocher un point de départ</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écran, entrée de menu…</text>
  <line x1="200" y1="287.0" x2="252" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Autres points de départ</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modèles, tâches, règles, IA</text>
  <line x1="200" y1="417.0" x2="250" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ZIP ou promotion</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nombre d'éléments cochés</text>
  <line x1="1120" y1="57.0" x2="888" y2="126" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La fermeture</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque dépendance atteinte</text>
  <line x1="1120" y1="217.0" x2="1084.0" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Décochés par défaut</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">connecteurs et pools</text>
  <line x1="1120" y1="317.0" x2="1084.0" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pkgb-arrow)"/>
</svg>

---

## Quand utiliser quoi

| Situation | À utiliser |
|---|---|
| Promouvoir des écrans / tableaux de bord de la préproduction vers la production. | Construire en préproduction, appliquer en production avec `overwrite`. |
| Livrer un ensemble d'écrans sélectionnés à une installation toute neuve. | Construire, appliquer avec `replace_all`. |
| Ajouter quelques nouveaux écrans à une installation client existante sans toucher à ses modifications. | Construire, appliquer avec `merge`. |
| Livrer une nouvelle version d'une application maintenue par l'éditeur quand le client a des modifications locales sur quelques écrans. | Construire, appliquer avec `overwrite` — les entités marquées `override = true` sur la cible sont préservées automatiquement. |
| Promouvoir des écrans en production en une étape, sans ZIP. | **Promouvoir vers…** dans Construire — voir [Promotion](#promotion). |
| Promouvoir une tâche Nomaflow entre environnements. | La choisir comme point de départ sous *Tâches nomaflow*, ou utiliser l'icône **Exporter** sur la ligne de la tâche, dans la page des Tâches. |
| Livrer un lot complet sous licence (Nomasx-1 + plugins Nomajde + configuration). | Pas par ce biais. Utiliser l'installeur wheel **`liberty-apps`** — voir [Installation → Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md). |

L'écran Package livre de la **configuration déclarative** — des fichiers TOML. Il ne livre ni code Python, ni JAR Java, ni packages de plugins, ni contenu de base de données. Pour cela, l'installeur wheel est le canal canonique.

---

## La vue Construire

Le panneau de gauche liste chaque **point de départ** possible de l'installation — écrans, entrées de menu, tableaux de bord. Le panneau de droite affiche la **clôture de dépendances** de tout ce qui est coché à gauche.

### Choisir les points de départ

Le panneau de gauche regroupe les candidats par type, chaque groupe avec le nombre d'éléments cochés (`ÉCRANS · 1/24`) :

| Section | Source |
|---|---|
| **Écrans** | Tous les écrans connus de l'installation — regroupés par application. |
| **Entrées de menu** | Toutes les entrées de menu, par application. |
| **Tableaux de bord** | Tous les tableaux de bord, par portée. |
| **Modèles de l'Explorateur** | Les modèles de l'explorateur de données, avec leurs analyses et tableaux de bord livrés. |
| **Tâches nomaflow** | Les tâches de `jobs.toml`. |
| **Règles de notification** | Les règles de Liberty Next → Logique → Notifications. |
| **Services** | Les services appelés par les écrans (Logique → Services). |
| **Assistant (questions, procédures)** | Ce qu'une application livre pour l'assistant IA — une entrée par application. |

**Filtrer les points de départ**, au-dessus des panneaux, filtre la liste visible par nom / libellé / portée. Le lien *tout sélectionner* de chaque section respecte le filtre — réduire d'abord (par exemple en saisissant `audit`), puis cliquer *tout sélectionner* pour ne prendre que les écrans correspondants.

Le choix des points de départ est **adapté aux opérations en masse** : garder le filtre sur un nom de client, cliquer *tout sélectionner*, et la sélection propre à ce client est prête. Inutile de cliquer chaque écran un par un.

### Ce que fait le résolveur de dépendances

Dès qu'un point de départ est coché — les boutons **Télécharger le ZIP (n)** et **Promouvoir vers…** comptent alors ce qui est coché —, le panneau de droite déclenche le résolveur (`POST /admin/find-dependencies` côté serveur). Pour chaque point de départ, le résolveur retrouve :

| Type | Ce qui est rapatrié |
|---|---|
| **`screen`** | La requête principale de l'écran, toutes les sous-requêtes référencées (depuis les actions d'écran, les onglets imbriqués, les champs conditionnels), chaque entrée de dictionnaire qui adosse une colonne, chaque lookup utilisé par la boîte de dialogue, chaque séquence et énumération, le connecteur auquel chaque requête appartient (et son pool). |
| **`menu_item`** | L'écran, la requête, l'endpoint, le tableau de bord ou la tâche visé par l'entrée de menu, puis la clôture de *celui-ci*. |
| **`dashboard`** | Chaque graphique du tableau de bord, chaque requête lue par chaque graphique, les connecteurs. Un tableau de bord nommé `<app>.<id>` est recherché dans cette application. |
| **`notification_rule`** | L'écran ou les tâches cités par son déclencheur. |

La clôture est **récursive mais bornée** (profondeur par défaut = 50). Les cycles sont détectés et court-circuités.

### Les types exclus par défaut

Le panneau **Dépendances** pré-coche chaque dépendance **sauf** trois types :

| Type | Pourquoi exclu par défaut |
|---|---|
| **Connecteurs** | L'installation cible possède presque toujours déjà son propre connecteur avec le bon pool et les bonnes informations d'identification. Livrer le connecteur de la source écraserait les secrets de la cible. |
| **Pools** | Idem — les pools portent les informations d'identification de la base. C'est le pool de la cible qu'il faut conserver. |
| **Points d'accès API** | Idem — les points d'accès portent des en-têtes d'authentification / jetons Bearer propres au câblage de l'installation source. Un point d'accès dont un écran lit ses lignes, ou par lequel il enregistre, fait partie des données de l'écran : il est coché comme les requêtes de l'écran, et un point d'accès servi par un service emporte ce service. |

Cela rend sûr d'emblée le scénario typique « promouvoir des écrans entre environnements » : rien qui porte des secrets n'est livré sans accord explicite. Cocher manuellement le groupe *Connecteurs* uniquement quand la cible n'en a réellement aucun — typiquement une installation toute neuve ou une préproduction par client à monter de zéro.

L'interface mémorise les cases cochées par dépendance ; les liens *tout sélectionner* / *tout désélectionner* au niveau du groupe rendent peu coûteux le fait d'activer ou de désactiver tous les connecteurs d'un coup.

### Construire le ZIP

Cliquer sur **Download ZIP** : le framework exécute `POST /admin/build-package` et renvoie un ZIP contenant jusqu'à six TOML :

| Fichier | Quand il est présent |
|---|---|
| `connectors.toml` | Quand au moins un connecteur / pool / requête / endpoint API est inclus. Les définitions de connecteurs sont **élaguées** — seuls les requêtes / endpoints de la clôture sont conservés, le reste est supprimé. |
| `dictionary.toml` | Quand la clôture rapatrie une entrée de dictionnaire, un lookup, une séquence ou une énumération. Les blocs dictionnaire par connecteur sont imbriqués sous `[connectors.<name>]`. |
| `screens.toml` | Quand au moins un écran fait partie de la clôture. Regroupés par application sous `[screens.<app>]`. |
| `menus.toml` | Quand au moins une entrée de menu fait partie de la clôture. Regroupées par application sous `[menus.<app>.items]`. |
| `charts.toml` | Quand au moins un graphique fait partie de la clôture. |
| `dashboards.toml` | Quand au moins un tableau de bord fait partie de la clôture. |

Plus un fichier toujours présent :

| Fichier | Ce qu'il contient |
|---|---|
| **`MANIFEST.md`** | Résumé lisible — ce que contient le ZIP, les points de départ, les compteurs par type, les variables d'environnement `${VAR}` référencées par le package (et que l'opérateur doit définir sur la cible), les références manquantes (clôture non résolue — généralement une coquille ou un renommage obsolète sur la source) et les consignes destinées à l'opérateur. |

Le MANIFEST est le premier élément à ouvrir sur la cible avant d'appliquer — il indique ce à quoi s'attendre et ce qui reste à câbler manuellement (variables d'environnement, secrets, clé maître).

### Ce qui n'est PAS dans le package

À connaître pour ne pas tenter de livrer par ce canal :

| Non inclus | Où cela se trouve à la place |
|---|---|
| Liberty Next → Administrer → App | Propres à chaque installation — réglages de l'application, licence, connexion. Jamais regroupés. |
| `auth.toml` / utilisateurs stockés en base | Propre à chaque installation — porte les empreintes de mot de passe Argon2. Jamais regroupé. |
| Plugins Python | Livrés avec le [wheel liberty-apps](../../installation/deploy-prebuilt-apps.md) ou le canal de release propre au plugin. |
| Contenu de base de données | Utiliser un dump de base (ou un [job de préchargement intégré](../../nomaflow/bundled-jobs.md)). |

---

## La vue Importer

Choisir la carte **Importer un paquet**. La vue propose trois stratégies — **Fusionner**, **Écraser (recommandé pour les mises à niveau)**, **Tout remplacer** — et un sélecteur de fichier.

### Les trois stratégies

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pkg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pkg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Stratégies d'import — ce qui se passe par entité du package</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="290" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="185" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FUSIONNER</text>
  <text x="185" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">N'ajoute que les nouveautés.</text>
  <text x="185" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Les entités existantes sont préservées.</text>
  <line x1="60" y1="170" x2="310" y2="170" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="185" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ajoutées</text>
  <text x="185" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">entités absentes de la cible</text>
  <text x="185" y="240" fill="#94a3b8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ignorées</text>
  <text x="185" y="258" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">déjà présentes (conservées en l'état)</text>
  <text x="185" y="296" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">À utiliser pour ajouter des nouveautés</text>
  <text x="185" y="310" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">sans toucher aux modifications du client</text>

  <rect x="350" y="84" width="290" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="495" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRASER — RECOMMANDÉ</text>
  <text x="495" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Le package devient la référence.</text>
  <text x="495" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Les autres entités cibles restent intactes.</text>
  <line x1="370" y1="170" x2="620" y2="170" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="495" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">ajoutées</text>
  <text x="495" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">les nouvelles entités s'installent</text>
  <text x="495" y="232" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">remplacées</text>
  <text x="495" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">les entités existantes prennent la version du package</text>
  <text x="495" y="270" fill="#c084fc" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">préservées (override = true)</text>
  <text x="495" y="288" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">fork client — laissé tel quel</text>
  <text x="495" y="316" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Parcours de mise à niveau par défaut</text>

  <rect x="660" y="84" width="290" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="805" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOUT REMPLACER</text>
  <text x="805" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Chaque TOML du ZIP remplace</text>
  <text x="805" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">l'INTÉGRALITÉ du fichier cible.</text>
  <line x1="680" y1="170" x2="930" y2="170" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="805" y="194" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">toutes les entités du package</text>
  <text x="805" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">installées sur la cible</text>
  <text x="805" y="232" fill="#fb923c" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">SUPPRIMÉES sur la cible</text>
  <text x="805" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">toute entité ABSENTE du package</text>
  <text x="805" y="280" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Radical — réservé au déploiement initial.</text>
  <text x="805" y="294" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Les fichiers que le package ne touche PAS</text>
  <text x="805" y="308" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">restent intacts.</text>

  <rect x="40" y="332" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="500" y="346" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">La stratégie s'applique INDÉPENDAMMENT à chaque TOML du ZIP. Un package qui ne contient que screens.toml ne touche que le screens.toml de la cible.</text>
</svg>

Les trois colonnes correspondent une à une aux cartes radio de l'interface :

| Stratégie | Comportement par entité | À utiliser quand |
|---|---|---|
| **`merge`** | Les NOUVELLES entités s'installent. Les entités EXISTANTES sur la cible sont **conservées en l'état**. | Ajout de nouveautés sans perturber les modifications du client. Le package ajoute ; il n'écrase jamais. |
| **`overwrite`** | Les NOUVELLES entités s'installent. Les entités EXISTANTES sont **remplacées** par la version du package — SAUF quand l'entité cible est marquée `override = true` (elle est alors préservée et signalée séparément). | Le parcours de mise à niveau standard. Le package devient la nouvelle référence pour les entités qu'il contient. Les entités situées ailleurs sur la cible (celles qui ne sont pas dans le package) restent intactes. |
| **`replace_all`** | Pour chaque TOML du ZIP, le **fichier cible entier** est remplacé par la version du package. CHAQUE entité absente du package est supprimée de ce fichier. Les fichiers que le package ne touche pas restent intacts. | Déploiement initial / réinitialisation éditeur / mise en place d'une base de référence sélectionnée. |

### L'échappatoire `override = true`

Une installation client doit parfois forker une entité de l'éditeur — modifier les colonnes d'un écran, remplacer une requête — et conserver ce fork au fil des mises à niveau. Il suffit d'ajouter `override = true` au bloc TOML de l'entité :

```toml title="screens.toml sur l'installation client"
[screens.crm.customers]
label = "Customers (customer fork)"
override = true   # les imports `overwrite` de l'éditeur ignoreront cette entité
query = "customers_v2_custom"
# ... reste de la modification client
```

Au prochain import `overwrite`, le framework voit le drapeau et laisse l'entité intacte. Le rapport d'import la fait figurer sous *preserved overrides* afin que l'opérateur voie exactement quelles entités ont survécu à la livraison éditeur.

Deux limites à connaître :

- `merge` ignore déjà les entités existantes — le drapeau y est redondant.
- `replace_all` supprime le fichier entier — les overrides NE sont PAS préservés. À utiliser en connaissance de cause.

### Aperçu, puis application \{#preview\}

Dès qu'un ZIP est choisi — et de nouveau quand la stratégie change —, la page présente l'import ; rien n'est écrit avant **Appliquer**.

| Partie | Contenu |
|---|---|
| Pastilles d'état | Le nombre par état : **Nouveau**, **Modifié**, **Identique**, **Conservé (override)**, **Ignoré**, **Supprimé**, **Erreurs** — avec *De &lt;installation&gt; · &lt;version&gt;*, l'origine du paquet. |
| Avertissements | Un paquet issu d'une version plus récente de Liberty Next — des réglages inconnus de cette instance peuvent être refusés : la mettre à jour d'abord ; des valeurs chiffrées que cette instance ne sait pas déchiffrer — une autre clé maître : les ressaisir après l'import. |
| Éléments | Une carte par fichier. Ce qui change vient d'abord ; **Afficher les identiques** ajoute le reste. Un élément modifié s'ouvre sur ses champs : **Ici maintenant** et **Après l'import**. |
| **Appliquer N changement(s)** | Écrit les changements, recharge, puis présente le même plan comme résultat, avec *Appliqué et rechargé*. Quand l'instance contient déjà chaque élément tel que dans le paquet, il n'y a rien à appliquer. |

Ce qui voyage est fusionné avec soin :

- les requêtes, tables, séquences, lookups et points d'accès d'un **connecteur** sont importés un par un : l'import d'un paquet ne retire jamais les autres requêtes de la cible ;
- une **tâche** qui existe déjà sur la cible garde sa planification, son activation, son fuseau horaire, ses préréglages, ses alertes, ses réessais, son niveau de journal et son délai ; une nouvelle tâche arrive désactivée ;
- le paquet est construit à partir des fichiers tels qu'écrits : les valeurs non renseignées et les références `${VAR}` voyagent telles quelles.

Si le rechargement échoue après une application réussie, les modifications de fichiers restent sur disque ; lancer **Recharger la config**, en haut des pages Liberty Next, une fois la cause corrigée.

---

## Promotion — directement vers une autre instance \{#promotion\}

Une **instance cible** est une autre installation Liberty Next — la production, la préproduction d'un client — jointe par son API.

**Paquet → Promotion** liste les cibles : **Nom**, **Libellé**, **URL** (l'adresse racine de la cible, avec son sous-chemin), **Compte** et **Mot de passe** d'un superutilisateur local de la cible — le mot de passe est enregistré chiffré —, **Vérifier le certificat TLS**, **Délai (s)**. **Tester** se connecte à la cible : *Connecté à prod · 7.0.64*. **Enregistrer les cibles** les conserve.

**Promouvoir vers…**, à côté de **Télécharger le ZIP** dans Construire, envoie la sélection à une cible :

1. choisir la **Cible**, la **Stratégie** et un **Commentaire** facultatif ;
2. la cible présente aussitôt l'import — le même plan que ci-dessus, calculé sur la cible : *Aperçu sur prod — rien n'est écrit avant d'appliquer* ;
3. **Appliquer sur prod** l'applique sur place.

Les connecteurs, pools et points d'accès d'API restent ceux de la cible, sauf s'ils sont cochés : les requêtes d'un connecteur voyagent tout de même, fusionnées dans le connecteur de la cible. Le même **Promouvoir vers…** envoie un [paquet de changements](../../nomaflow/change-packages.md#promote) approuvé.

L'**Historique** de la vue Promotion liste les promotions appliquées depuis cette instance — quand, par qui, vers quelle cible, quoi, et le résultat ; une ligne s'ouvre sur le compte rendu de la cible.

---

## Secrets et variables d'environnement

Le package est du **TOML en clair**. Deux schémas permettent aux secrets de la source de voyager sans laisser fuir la matière secrète :

| Schéma | Ce qui se passe à la construction / application |
|---|---|
| **Secrets chiffrés** — `password = "ENC:base64=="` | Le texte chiffré se retrouve verbatim dans le package. La **cible doit avoir la même clé maître** (`LIBERTY_MASTER_KEY`) (ou variable d'environnement `LIBERTY_MASTER_KEY`) que la source — faute de quoi le déchiffrement échouera à la première utilisation. |
| **Références à des variables d'environnement** — `password = "${DB_PASSWORD}"` | La chaîne littérale `${DB_PASSWORD}` est dans le package. L'opérateur doit définir la variable **sur la cible** avant de recharger. `MANIFEST.md` liste chaque `${VAR}` référencée par le package. |

Il convient de choisir un schéma par installation — mélanger les deux dans une même configuration prête à confusion. Les secrets chiffrés voyagent mieux entre déploiements conteneurisés ; les variables d'environnement voyagent mieux entre orchestrateurs (Kubernetes Secrets, Docker `--env-file`, `EnvironmentFile` systemd).

### Ce qu'il ne faut PAS livrer

| À éviter | Pourquoi |
|---|---|
| Déplacer `auth.toml` entre installations via l'écran Package. | L'écran ignore `auth.toml`. Déplacer les utilisateurs via l'administration dédiée *Users* (ou les inviter sur chaque installation). |
| Attendre d'un package qu'il transporte Liberty Next → Administrer → App. | Il ne le fait pas — réglages de l'application, licence et connexion restent propres à chaque installation. |
| Livrer un package en `replace_all` à un client qui a des modifications locales sans prévenir. | Les écrans / requêtes / entrées de dictionnaire du client sont supprimés. Il n'existe aucune annulation automatique — conserver d'abord une sauvegarde de l'arborescence de configuration de la cible. |

---

## Inspection sans export

Le panneau de droite de l'onglet Build est aussi un **inspecteur de dépendances autonome**. Cocher un seul écran, examiner la clôture — c'est exactement ce que cet écran emporterait dans un package, et exactement ce qui se casserait en cas de renommage / suppression. Inutile de cliquer sur *Download ZIP* — l'inspection est en soi la valeur.

Liberty propose également une fenêtre modale dédiée **Find dependencies** depuis n'importe quelle liste d'écrans / d'entrées de menu / de tableaux de bord (l'icône à côté du bouton de renommage). Même service côté serveur (`POST /admin/find-dependencies`), forme plus simple — uniquement l'arbre de clôture pour l'entité unique sur laquelle on l'a ouverte.

---

## Pièges courants

| Erreur | Symptôme | Remède |
|---|---|---|
| Oubli de définir une `${VAR}` listée dans MANIFEST.md avant de recharger la cible. | Un connecteur / une requête échoue à la première utilisation avec une erreur de substitution manquante. | Lire MANIFEST.md avant d'appliquer. Définir les variables d'environnement dans le fichier d'environnement / unit systemd / env Docker de la cible. |
| La source et la cible portent des `master_key` différentes. | Les valeurs chiffrées `ENC:...` ne se déchiffrent pas ; le connecteur concerné échoue à la première utilisation. | Synchroniser la clé maître (ou faire tourner les valeurs chiffrées sur la cible — voir [Build → Secure → Encrypted secrets](./secure/encrypted-secrets.md)). |
| Usage de `replace_all` pour appliquer une petite tranche — écrans spécifiques au client effacés. | Les écrans client manquent sur la cible après l'import. | Restaurer le TOML précédent depuis la sauvegarde. Appliquer la fois suivante avec `overwrite`. |
| Inclusion de `connectors.toml` (exclu par défaut) sans vérifier que les noms de pool correspondent à la cible. | Les pools de la cible changent à l'improviste ; les requêtes préexistantes échouent au prochain rechargement. | Laisser les connecteurs / pools exclus par défaut tant que la cible n'est pas toute neuve. Ou renommer les pools sur la source avant le regroupement. |
| Construction depuis une source aux références non résolues (renommage cassé / requête supprimée). | MANIFEST.md liste des éléments sous *Missing references*. | Corriger sur la source (renommer / supprimer / restaurer) et reconstruire. La cible ne recevra pas les références cassées — mais elle ne recevra pas non plus les écrans / requêtes qui les référençaient. |
| Un avertissement signale des valeurs que cette instance ne sait pas déchiffrer. | La source et la cible utilisent des clés maîtres différentes. | Ressaisir ces valeurs sur la cible après l'import, ou partager la clé maître. |
| L'import a réussi mais `Appliqué et rechargé` est absent — un avertissement *reload failed* est apparu. | Le disque porte la nouvelle configuration ; l'état en mémoire est obsolète. | Recharger manuellement via **Recharger la config**, en haut des pages Liberty Next, une fois la cause sous-jacente corrigée (souvent une erreur de syntaxe dans un TOML sans rapport, détectée par le rechargement). |

---

## Accès programmatique

Les deux endpoints situés derrière l'interface sont utilisables sans interface — utile pour la CI / la promotion scriptée :

```bash title="Construire un package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -H "Content-Type: application/json" \
  -d '{"seeds":[{"kind":"screen","name":"customers","scope":"crm"}]}' \
  https://<source>/admin/build-package \
  --output liberty-package.zip
```

```bash title="Appliquer un package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -F "package=@liberty-package.zip" \
  "https://<target>/admin/import-package?strategy=overwrite"
```

`build-package` accepte un tableau optionnel `include` pour filtrer la clôture (même forme que l'état des cases à cocher par dépendance de l'interface). `import-package` accepte `strategy` en paramètre de requête (`merge` | `overwrite` | `replace_all`) et `dry_run=true` pour l'aperçu. Les deux endpoints exigent une authentification superuser. `POST /admin/promotion/push` envoie un paquet ou un paquet de changements approuvé vers une cible déclarée.

---

## Pour aller plus loin

- [Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md) — quand le canal package ne suffit pas (lot complet = configuration + plugins Python), utiliser l'installeur wheel `liberty-apps`.
- [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md) — les jobs prêts à l'emploi livrés avec `liberty-apps`, dont le job `nomasx1-import-reference` qui charge un lot de référence sélectionné.
- [Encrypted secrets](./secure/encrypted-secrets.md) — ce que sont les valeurs `ENC:`, comment les faire tourner lors d'une promotion entre installations aux clés maîtres différentes.
