---
title: Audit Licences JD Edwards
description: "Un audit de conformité et d'optimisation en un clic pour une application JD Edwards — inventaire des licences, usage réel, risque financier et plan de remédiation, produit sous forme de livrable PDF ou Markdown."
keywords: [Nomasx-1, rapports, audit de licences, JD Edwards, Oracle, conformité, optimisation, Object Usage Tracking, séparation des tâches, risque financier]
---

# Audit Licences JD Edwards

L'**Audit Licences JD Edwards** est un rapport généré, pas une grille. Il s'exécute sur une application connectée et assemble un livrable complet de conformité et d'optimisation : ce qui est souscrit, ce qui est réellement utilisé, où se trouve le risque financier et comment le réduire. La sortie est un PDF soigné — ou un Markdown — prêt à remettre à un comité de pilotage.

Il s'appuie sur les données que Nomasx-1 collecte déjà — Object Usage Tracking, affectations de rôles et de droits, matrice de séparation des tâches et inventaire des licences par application — et les transforme en un document narratif unique.

:::info[Spécifique à JDE]
Ce rapport cible une application **JD Edwards EnterpriseOne** et son socle technologique Oracle. L'application connectée est identifiée par son `apps_id` Nomasx-1.
:::

---

## En un coup d'œil

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rpt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="32" width="920" height="256" rx="14" fill="url(#rpt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="60" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Rapports</text>
  <line x1="40" y1="76" x2="960" y2="76" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="92" width="300" height="176" rx="10" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.30)" strokeWidth="1.2"/>
  <text x="78" y="120" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Audit Licences JD Edwards</text>
  <text x="78" y="142" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Analyse de conformité + optimisation</text>
  <text x="78" y="156" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">pour une application.</text>
  <rect x="78" y="174" width="60" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="108" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">PDF</text>
  <rect x="146" y="174" width="84" height="20" rx="10" fill="rgba(148,163,184,0.12)" stroke="#334155" strokeWidth="1"/>
  <text x="188" y="188" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">markdown</text>

  <text x="392" y="116" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="392" y="126" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="141" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Application</text>
  <text x="924" y="141" fill="#f87171" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">requis</text>
  <rect x="392" y="152" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="167" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecteur cible</text>
  <text x="924" y="167" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">nomasx1</text>
  <rect x="392" y="178" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="193" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Schéma</text>
  <text x="924" y="193" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">public</text>
  <rect x="392" y="204" width="540" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="404" y="219" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Libellé de date d'audit · Nom du client</text>
  <text x="924" y="219" fill="#64748b" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">facultatif</text>

  <rect x="392" y="236" width="92" height="26" rx="6" fill="rgba(56,189,248,0.16)" stroke="rgba(56,189,248,0.45)" strokeWidth="1.2"/>
  <text x="438" y="253" fill="#7dd3fc" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter et télécharger</text>
  <rect x="492" y="236" width="70" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="253" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Format</text>
</svg>

---

## Le livrable

Un document confidentiel, aux couleurs de la marque, d'environ trente à quarante pages — PDF pour le comité de pilotage, Markdown quand on veut l'éditer ou l'intégrer. La couverture porte le titre *Audit Licences JD Edwards – \{client\}*, le sous-titre *Analyse de conformité et plan d'optimisation des licences Oracle*, et un bloc **Client / Date / Auteur / Version** ; chaque page est marquée *Confidentiel* en pied. La rédaction est en français, langue de travail de l'audit.

C'est un document **interne** de conformité et d'optimisation — la base de vos propres décisions et de la préparation d'un renouvellement de contrat, pas une déclaration à remettre à l'éditeur.

---

## Ce que contient le rapport

Neuf sections, chacune construite à partir des données collectées par Nomasx-1 :

1. **Synthèse** — résumé pour la direction : contexte et objectifs, les constats principaux assortis chacun d'un niveau de risque, le risque financier estimé et les recommandations clés.
2. **Périmètre de l'audit** — composants audités, ce qui est hors périmètre, le tableau des environnements JD Edwards (production vs hors production) et l'**architecture technique** : versions logicielles, inventaire des serveurs et un schéma d'architecture que le rapport génère automatiquement.
3. **Méthodologie** — les outils et données utilisés, les règles d'analyse (l'usage se mesure à la consommation réelle, pas aux autorisations) et un tableau des **sources de données** qui date chaque entrée.
4. **Licences acquises** — l'inventaire souscrit : Oracle Database Enterprise Edition (NUP), les options et packs, les composants détectés en usage, la *règle des minimas* et le minimum NUP calculé à partir du nombre de processeurs ; puis l'Oracle Technology Foundation de JD Edwards et les modules applicatifs.
5. **Utilisation et conformité** — le cœur du rapport :
   - les modules JD Edwards croisés **OUT × transactions** — consommation réelle face à l'activité d'écriture — avec un détail sur les modules peu utilisés (quel utilisateur a touché quel objet) ;
   - les **autorisations face à l'usage réel** par module (utilisateurs autorisés vs OUT vs transactions vs nombre de rôles), qui met en évidence des accès bien plus larges que l'usage effectif ;
   - l'**analyse d'optimisation** (voir plus bas) ;
   - l'analyse des utilisateurs Oracle Technology Foundation (déclarés / actifs / désactivés, comptes techniques, affectations de rôles) et le décompte des utilisateurs de la base Oracle.
6. **Risque financier** — la méthode de calcul (prix public Oracle plus trois ans d'arriérés de support), chaque risque identifié chiffré ligne à ligne, un montant consolidé, les leviers priorisés et l'analyse des devis Oracle éventuellement en cours de négociation.
7. **Plan de remédiation** — un nettoyage concret : désactivation des comptes jamais utilisés, et rationalisation des rôles et des accès (suppression des rôles non affectés, revue des cumuls de rôles excessifs, alignement des accès sur l'usage réel).
8. **Recommandations et plan d'action** — chaque action classée par priorité, effort et impact financier, un planning indicatif en quatre phases, et les indicateurs de suivi à surveiller ensuite.
9. **Annexes** — la liste détaillée des utilisateurs à désactiver (avec dates de création et de dernière modification, et les précautions de validation à appliquer avant désactivation) et un glossaire.

---

## L'analyse d'optimisation

Au-delà de la seule conformité, le rapport exploite l'**extraction OUT détaillée** — une ligne par utilisateur × module × objet — pour dimensionner les licences au besoin réel plutôt qu'à l'octroi global d'« usage complet » :

- la répartition du nombre de modules par utilisateur (la plupart ne touchent qu'une poignée de modules) ;
- les combinaisons de modules les plus fréquentes, qui se regroupent autour d'un noyau commercial / logistique ;
- deux profils d'usage — **Standard** (le noyau) et **Étendu** (le noyau plus au moins un module spécialisé) ;
- une proposition de répartition en **bundles différenciés** à porter dans un renouvellement de contrat.

C'est ce qui fait passer l'audit d'un instantané de conformité à un levier d'optimisation des coûts — la section sur laquelle se construit la négociation du renouvellement.

---

## Exécuter le rapport

Le rapport se trouve sous **Rapports** dans la barre latérale de Nomasx-1, sur la page *Exécuter un rapport et télécharger le résultat en PDF ou markdown.* du framework. Choisir **Audit Licences JD Edwards** dans la liste, renseigner les paramètres, choisir un **Format**, puis **Exécuter et télécharger**.

| Paramètre | Requis | Valeur par défaut | Ce qu'il définit |
|---|---|---|---|
| **Application** | Oui | — | L'`apps_id` à auditer. Doit exister dans le registre des applications (*Configuration → Global → Applications*). |
| **Connecteur cible** | Non | `nomasx1` | Le pool de connecteurs qui héberge les tables Nomasx-1. |
| **Schéma** | Non | `public` | Le schéma de base de données sur ce connecteur. |
| **Libellé de date d'audit** | Non | mois + année en cours | Le libellé imprimé sur la page de couverture (ex. *Mai 2026*). |
| **Nom du client** | Non | le nom de l'application | Le nom du client sur la page de couverture. |

**Format** — `PDF` pour le livrable du comité de pilotage, `markdown` quand on veut éditer ou intégrer le contenu. L'exécution renvoie le fichier directement dans le navigateur.

---

## Avant d'exécuter

L'audit lit les données que Nomasx-1 a déjà collectées pour l'application — il ne collecte pas à la volée. Pour un état fidèle, vérifier au préalable que la dernière collecte a bien été réalisée. Le rapport s'appuie sur :

- **Object Usage Tracking** — la synthèse (utilisateurs distincts par module), le détail (utilisateurs / objets / dates) et le détail fin (une ligne par utilisateur × module × objet) qui alimentent les sections *Utilisation et conformité* et optimisation.
- **Les modules avec transactions** — les utilisateurs ayant généré au moins une écriture par module.
- **La liste des utilisateurs JD Edwards** — utilisateurs déclarés, actifs et désactivés, avec dates de création et de dernier usage.
- **Les rôles, les affectations utilisateur-rôle et les droits d'accès par rôle**, plus les **menus JDE** (mapping objet → module) qui relient l'usage aux modules.
- **L'inventaire des options et packs de la base** — composants Oracle en usage face à ceux souscrits.
- **L'inventaire des licences et la tarification** (*Licences* et *Configuration → Pricing*), faute de quoi les chiffres financiers s'écartent du price book réel.

Une exécution sur une application sans usage collecté produit tout de même le document, mais les sections usage et finance apparaîtront vides plutôt que fausses.

---

## Conseils et bonnes pratiques

- **Exécutez-le après une collecte fraîche.** L'audit est un instantané des tables courantes — planifiez-le juste après la collecte nocturne pour que les chiffres collent à la réalité.
- **Renseignez le *Libellé de date d'audit* et le *Nom du client*** pour une page de couverture prête à transmettre à l'extérieur ; laissez-les vides pour un brouillon interne.
- **Utilisez *markdown* pour itérer, *PDF* pour livrer.** La sortie Markdown reprend le même contenu sans la mise en forme de couverture, pratique pour relire avant l'export final.
- **Lisez-le à côté des écrans sources.** Chaque chiffre remonte à un écran — *Object Usage Tracking*, *Conflits*, *Licences* — pour qu'un relecteur puisse descendre de l'audit vers les données vivantes.
