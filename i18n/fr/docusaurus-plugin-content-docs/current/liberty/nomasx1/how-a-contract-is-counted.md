---
title: Lecture d'un contrat
description: "Comment la revue des licences de Nomasx-1 lit un contrat Oracle pour JD Edwards : qui est compté, comment un utilisateur est placé sur les bundles et les lignes de module, les lignes au chiffre d'affaires, aux employés et au processeur, le facteur de cœur d'Oracle et les clusters VMware, les Named User Plus d'une base de données, les composants inclus dans un autre, les modules qu'aucune ligne ne couvre. Une hypothèse aux prix publics, jamais une position certifiée."
keywords: [Nomasx-1, revue des licences, contrat Oracle, bundle, Application User, Enterprise $M, employés, licence processeur, facteur de cœur, cluster VMware, Named User Plus, minimum par processeur, Technology Foundation, JD Edwards]
---

# Lecture d'un contrat

La [revue des licences](./licensing-review.md), son PDF, le [rapport d'audit des licences](./reports/audit-licences.md) et l'assistant IA lisent un contrat de la même façon. Cette page en donne les règles : qui est compté, comment chaque utilisateur est placé sur les lignes des contrats, et comment se comparent les lignes qui ne sont pas des licences nominatives.

C'est une lecture du contrat et des règles publiques d'Oracle appliquée à ce qui a été collecté — **une hypothèse, jamais une position certifiée**. Seul Oracle peut établir une position de licences.

---

## Les lignes d'un contrat \{#lines\}

Un contrat ([CSI](./licenses/csi.md)) couvre une ou plusieurs applications. Ses lignes sont de deux sortes :

- **un composant seul** (onglet *Composants*) : un module, une métrique et une quantité ;
- **un bundle** (onglets *Bundles* et *Composants des bundles*) : un nom, une métrique, une quantité et les modules qu'il regroupe.

La **métrique** indique comment une ligne est comptée ([Métriques](./settings/pricing/metrics.md)) :

| Métrique | Comptée comme |
|---|---|
| **Application User**, **Named User Plus** sur un module applicatif | Des licences nominatives : un nombre de personnes. |
| **Named User Plus** sur un produit technologique (une base de données, ses options et ses packs) | Un comptage, pas des licences nominatives — voir [Named User Plus d'une base de données](#named). |
| **Enterprise $M** | Le chiffre d'affaires de l'entreprise, en millions. |
| **Employee** | Les employés de l'entreprise. |
| **Processor** | Les processeurs des machines sur lesquelles le produit s'exécute. |
| Toute autre (utilisateur simultané, note de frais, flux…) | Non comptée : la ligne couvre ses modules, sans comparaison. La page la cite. |

Une ligne sur Oracle Data Integrator ou Oracle Analytics Server est lue par le questionnaire de sa propre page ([Oracle Data Integrator](./licenses/odi.md), [Oracle Analytics Server](./licenses/analytics-server.md)) : elle n'est jamais comparée aux utilisateurs JD Edwards ni aux serveurs de base de données.

---

## Qui est compté \{#who\}

- **Les utilisateurs activés uniquement.** Un compte désactivé ne compte pour rien.
- **Jamais un compte technique ou lié** — les indicateurs *Technique (Y/N)* et *Lié (Y/N)* des [Propriétés utilisateurs](./settings/security/users-properties.md).
- **Sur les modules qu'ils ont utilisés**, quand Object Usage Tracking a des données pour l'application : chaque objet exécuté appartient à un module par son code système ([Code système](./settings/jde/system-code.md), avec les [reclassifications](./settings/jde/reclassification.md)).
- **À défaut, sur les modules que leur sécurité autorise**, et seulement pour les utilisateurs connectés pendant la période de l'application : le champ *Connecté depuis moins de (jours) = utilisateur* d'[Applications](./settings/global/applications.md), 90 jours s'il est vide. Un utilisateur qui ne s'est pas connecté pendant cette période ne compte pour rien.

La page et le PDF indiquent laquelle des deux bases a été retenue.

---

## Placement d'un utilisateur \{#placing\}

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lrc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lrc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lrc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lrc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#lrc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Comment un utilisateur est placé</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les modules dont l'utilisateur a besoin, puis chaque ligne tour à tour — d'abord ceux qui ont le moins de choix.</text>
  <rect x="250" y="84" width="300" height="40" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="400.0" y="101.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modules nécessaires</text>
  <text x="400.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">utilisés (Object Usage Tracking), sinon autorisés</text>
  <line x1="400.0" y1="124" x2="400.0" y2="142" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="142" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="159.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Ligne au chiffre d'affaires ou aux employés</text>
  <text x="400.0" y="174.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">couvre ses modules pour tous : aucune licence</text>
  <line x1="400.0" y1="182" x2="400.0" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="200" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="217.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Le bundle qui couvre le plus</text>
  <text x="400.0" y="232.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">à égalité : le plus petit, puis l'ordre du contrat</text>
  <line x1="400.0" y1="240" x2="400.0" y2="258" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="258" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="275.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Plein ? la ligne suivante qui convient</text>
  <text x="400.0" y="290.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un autre bundle, ou la ligne du module seul</text>
  <line x1="400.0" y1="298" x2="400.0" y2="316" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="316" width="300" height="40" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="400.0" y="333.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Plus rien : une licence manquante</text>
  <text x="400.0" y="348.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">sur ce module, chiffrée au prix public</text>
  <rect x="620" y="84" width="300" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="770.0" y="101.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un module qu'aucune ligne ne couvre</text>
  <text x="770.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">mis à part : un Application User chacun</text>
  <line x1="550" y1="104" x2="620" y2="104" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#lrc-flow)"/>
  <rect x="620" y="200" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="770.0" y="217.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un composant qui en inclut d'autres</text>
  <text x="770.0" y="232.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">sa ligne les couvre aussi (Technology Foundation)</text>
  <rect x="620" y="258" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="770.0" y="275.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Une ligne technologique en Named User Plus</text>
  <text x="770.0" y="290.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">un comptage, pas des licences : jamais sous le minimum</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Qui est compté</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actifs, ni techniques ni liés</text>
  <line x1="200" y1="107.0" x2="250" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le plus petit bundle d'abord</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le grand reste à qui en a besoin</text>
  <line x1="200" y1="227.0" x2="250" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Non couvert</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un risque à négocier</text>
  <line x1="1000" y1="107.0" x2="920" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
</svg>

Pour chaque utilisateur, on part des modules dont il a besoin, puis :

1. **Une ligne au chiffre d'affaires ou aux employés couvre ses modules pour tous** : ces modules ne demandent aucune licence.
2. Pour le reste, **le bundle qui en couvre le plus** et qui a encore une place. Entre deux bundles qui en couvrent autant, **le plus petit** — un utilisateur qui n'a besoin que des stocks et des ventes va dans le bundle *Stocks + Ventes* avant le grand bundle qui contient aussi les achats et la planification — puis l'ordre du contrat.
3. **Une ligne pleine est écartée** : la suivante qui convient est essayée — un autre bundle, ou la ligne du module seul.
4. **Ce qu'aucune ligne disponible ne couvre est une licence manquante** sur ce module.
5. **Un module qu'aucune ligne des contrats ne couvre** est mis à part, avec les personnes qui en ont besoin : un audit compterait un *Application User* pour chacune. Un risque à négocier — une ligne à ajouter, un bundle à étendre —, pas un fait.

Un utilisateur placé sur un bundle est compté **une seule fois** pour tous ses modules. Les utilisateurs qui ont le moins de choix passent en premier — ceux qu'une seule ligne peut accueillir, puis ceux qui ont besoin du plus grand nombre de modules — pour qu'un grand bundle ne se remplisse pas de personnes qu'un plus petit aurait prises. Les mêmes données donnent toujours le même résultat.

### Un composant qui en inclut d'autres \{#includes\}

Un composant peut en **inclure** d'autres ([Composants inclus](./settings/pricing/components-included.md)) : Oracle Technology Foundation for JD Edwards EnterpriseOne inclut *JD Edwards EnterpriseOne Core Tools and Infrastructure* et *Oracle Standard Edition 2*. Une ligne sur ce composant, seule ou dans un bundle, couvre aussi ce qu'il inclut : les utilisateurs de Core Tools prennent place sur la ligne Technology Foundation et, au-delà de sa quantité, deviennent des licences manquantes.

---

## Chiffre d'affaires et employés \{#revenue\}

Une ligne en **Enterprise $M** couvre ses modules pour tous les utilisateurs. La comparaison porte sur le chiffre d'affaires déclaré pour le contrat — *Chiffre d'affaires déclaré (millions)*, à la date la plus récente de l'onglet **Chiffres déclarés** — face au chiffre d'affaires souscrit. Une ligne en **Employee** se compare aux employés déclarés au même endroit, à défaut aux employés collectés dans JD Edwards.

Un chiffre par contrat et par métrique : quand plusieurs lignes d'un contrat sont comptées au chiffre d'affaires, la souscription retenue est la plus grande de leurs quantités. Un chiffre non déclaré affiche *non déclaré*.

---

## Processeurs \{#processors\}

Une ligne au **Processor** sur la base de données se compare aux licences processeur nécessaires à ses serveurs, selon la règle d'Oracle :

- les **cœurs × le facteur de cœur de la puce** (la *Processor Core Factor Table* d'Oracle : 0,5 pour Intel et AMD, 1 pour IBM POWER6 et suivants…). Les cœurs de toutes les machines sont additionnés avant d'appliquer le facteur, et le résultat est arrondi une seule fois à l'entier supérieur ;
- une **partition matérielle** (LPAR, zone plafonnée, Oracle VM avec affectation fixe des cœurs) compte les cœurs attribués à la partition ;
- une **machine virtuelle qui n'est pas une partition matérielle** (VMware et équivalents) compte **tous les hôtes physiques de son cluster**, quelle que soit sa propre taille. Un cluster est compté une seule fois, quel que soit le nombre de machines du produit qui s'y exécutent.

Les machines, leur famille de processeur, leur virtualisation et leur cluster se saisissent dans [Taille des serveurs](../nomajde/monitoring/server-sizes.md) de Nomajde ; les serveurs de base de données sont ceux dont le rôle porte une base, les hôtes d'un cluster ceux qui ont le rôle *Hôte physique d'un cluster (hyperviseur)*. Sans serveur saisi, la lecture reprend le nombre de CPU donné par la base lors de sa collecte, considéré comme x86. Un cluster dont les hôtes ne sont pas saisis, ou un serveur sans taille, fait du chiffre **un minimum**, et la page le signale.

---

## Named User Plus d'une base de données \{#named\}

Une base de données, ses options et ses packs de gestion licenciés en **Named User Plus** ne se comptent pas licence par licence : JD Edwards se connecte à la base avec un seul compte, si bien que personne ne les « utilise » au sens d'Object Usage Tracking. La ligne se compare à un **comptage** :

> les utilisateurs JD Edwards activés des applications du contrat (hors comptes techniques et liés)
> \+ les comptes ouverts de la base qui ne sont pas ceux d'Oracle
> \+ les utilisateurs déclarés pour les autres applications du contrat (onglet **Utilisateurs des autres applications**)

— et jamais sous **le minimum par processeur** de la liste de prix × les processeurs des serveurs de base de données : 25 par processeur pour la base Enterprise Edition, dont les options et les packs suivent le même minimum. Ce minimum est la colonne *Minimum* de [Prix public](./settings/pricing/pricing.md).

Les comptes propres à la base sont lus avec ses propriétés lors de la collecte de la base. Tant que cette collecte n'a pas eu lieu, tous les comptes ouverts sont comptés, y compris ceux d'Oracle, et la page le signale.

Le dépassement est chiffré dans l'onglet *Risque financier* au prix public Named User Plus avec trois ans de support.

---

## Les montants \{#amounts\}

| Écart | Estimation |
|---|---|
| Une licence manquante, un utilisateur sur un module qu'aucune ligne ne couvre | Un *Application User* : prix public + 3 × support annuel du module. |
| Named User Plus au-delà de la souscription | Chacun : prix public + 3 × support annuel de la base, de l'option ou du pack. |
| Data Integrator, Analytics Server | Les montants de leurs constats. |
| Chiffre d'affaires, employés, processeurs au-delà de la souscription | Non chiffrés : signalés sur la page. |

Les prix sont ceux de [Prix public](./settings/pricing/pricing.md) ; un module sans prix n'ajoute rien et affiche *pas de prix*.
