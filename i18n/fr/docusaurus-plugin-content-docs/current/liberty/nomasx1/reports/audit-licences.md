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
  <text x="78" y="142" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Analyse conformité + optimisation</text>
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
  <text x="924" y="219" fill="#64748b" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">optionnel</text>

  <rect x="392" y="236" width="92" height="26" rx="6" fill="rgba(56,189,248,0.16)" stroke="rgba(56,189,248,0.45)" strokeWidth="1.2"/>
  <text x="438" y="253" fill="#7dd3fc" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter et télécharger</text>
  <rect x="492" y="236" width="70" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="527" y="253" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Format</text>
</svg>

---

## Ce que contient le rapport

Le livrable est un document structuré en neuf sections :

1. **Synthèse** — résumé pour la direction : contexte, constats clés, risque financier estimé et principales recommandations.
2. **Périmètre de l'audit** — l'application auditée et un schéma d'architecture de l'environnement.
3. **Méthodologie** — les outils et données utilisés, les règles d'analyse et les sources de données.
4. **Licences acquises** — l'inventaire souscrit : la base de données Oracle, la JD Edwards Oracle Technology Foundation et les modules applicatifs.
5. **Utilisation et conformité** — les composants détectés en usage réel face à ce qui est sous licence, pour JD Edwards et pour les options de la base de données Oracle.
6. **Risque financier** — le mode de calcul du risque, les risques identifiés, le montant consolidé et la priorisation des leviers.
7. **Plan de remédiation** — le nettoyage concret : désactivation d'utilisateurs JDE et rationalisation des rôles et des accès.
8. **Recommandations et plan d'action** — actions par priorité, calendrier indicatif et suivi.
9. **Annexes** — la liste détaillée des utilisateurs JDE à désactiver et un glossaire.

Les sections narratives sont rédigées en français, la langue de travail du livrable d'audit.

---

## Exécuter le rapport

Le rapport se trouve sous **Rapports** dans la barre latérale Nomasx-1, sur la page *Exécuter un rapport et télécharger le résultat en PDF ou markdown.* du framework. Choisir **Audit Licences JD Edwards** dans la liste, renseigner les paramètres, choisir un **Format**, puis **Exécuter et télécharger**.

| Paramètre | Requis | Défaut | Ce qu'il fixe |
|---|---|---|---|
| **Application** | Oui | — | L'`apps_id` à auditer. Doit exister dans le registre des applications (*Configuration → Global → Applications*). |
| **Connecteur cible** | Non | `nomasx1` | Le pool de connexion qui héberge les tables Nomasx-1. |
| **Schéma** | Non | `public` | Le schéma de base de données sur ce connecteur. |
| **Libellé de date d'audit** | Non | mois + année en cours | Le libellé imprimé sur la page de garde (ex. *Mai 2026*). |
| **Nom du client** | Non | le nom de l'application | Le nom du client sur la page de garde. |

**Format** — `PDF` pour le livrable de comité de pilotage, `markdown` quand on veut éditer ou intégrer le contenu. L'exécution renvoie le fichier directement au navigateur.

---

## Avant de lancer

L'audit lit les données que Nomasx-1 a déjà collectées pour l'application — il ne collecte pas à la volée. Pour une image fidèle, s'assurer que la dernière collecte a bien tourné au préalable :

- **Object Usage Tracking** est alimenté (l'usage réel des composants nourrit la section *Utilisation et conformité*).
- **La sécurité et les affectations** sont à jour (utilisateurs, rôles et affectations de droits).
- **La matrice de séparation des tâches** est configurée (*Configuration → SoD*) pour que le croisement des conflits ait du sens.
- **L'inventaire des licences et les prix** sont à jour (*Licences* et *Configuration → Prix*), sinon les montants financiers s'écartent du tarif réel.

Une exécution sur une application sans usage collecté produit tout de même le document, mais les sections usage et financier apparaîtront vides plutôt que fausses.

---

## Conseils et bonnes pratiques

- **Lancez-le après une collecte fraîche.** L'audit est une photographie des tables courantes — programmez-le juste après la collecte nocturne pour que les chiffres collent à la réalité.
- **Renseignez le *Libellé de date d'audit* et le *Nom du client*** pour une page de garde prête à être diffusée à l'externe ; laissez-les vides pour un brouillon interne.
- **Utilisez *markdown* pour itérer, *PDF* pour livrer.** La sortie Markdown est le même contenu sans la mise en forme de la page de garde, pratique pour une relecture avant l'export final.
- **Lisez-le à côté des écrans sources.** Chaque chiffre remonte à un écran — *Object Usage Tracking*, *Conflits*, *Licences* — pour qu'un relecteur puisse descendre de l'audit vers les données vivantes.
