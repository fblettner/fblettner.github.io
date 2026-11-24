---
title: Nomajde — L'application compagnon de JD Edwards
description: "Nomajde s'installe à côté de JD Edwards EnterpriseOne et regroupe le travail quotidien — données de base, sécurité, références croisées, montée de version, supervision — sur une série de grilles et de pages. SQL et AIS API combinés, pas de navigation fat-client, pas d'export manuel."
keywords: [Nomajde, JD Edwards, JDE, EnterpriseOne, security workbench, gestion des utilisateurs, gestion des rôles, UDC, références croisées, montée de version, Server Manager, performance, supervision, AIS, compagnon JDE]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomajde

**Nomajde** est une application compagnon de JD Edwards EnterpriseOne éditée par Nomana-IT et construite avec Liberty Next. Elle regroupe l'administration courante de JD Edwards — utilisateurs, rôles, security workbench, environnements, tables UDC, données de base et planification BI Publisher — dans quelques grilles avec recherche et modification en ligne, et écrit chaque changement directement dans JD Edwards par SQL et par l'API REST AIS.

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(251,146,60,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>JD Edwards EnterpriseOne · Application compagnon</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Le travail JD Edwards,<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>sur une grille filtrable.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Nomajde est le compagnon quotidien de JD Edwards EnterpriseOne. Il regroupe sur un ensemble réduit de grilles modifiables en ligne ce que JDE répartit habituellement sur plusieurs formulaires — master utilisateur, description des rôles, security workbench, environnements, tables UDC, références croisées, serveurs, montée de version. Chaque modification est écrite dans JDE en direct : <b>SQL</b> sur les tables de sécurité et les tables maîtres pour la majorité des actions, <b>appels REST AIS</b> pour celles que JDE n'accepte que par cette voie (réinitialisation de mot de passe, provisionnement du compte de sécurité). Aucune copie intermédiaire, aucun traitement nocturne à attendre.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(74,158,255,0.16)', border: '1px solid rgba(74,158,255,0.45)', fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Données JDE en direct · SQL + API AIS</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(251,146,60,0.14)', border: '1px solid rgba(251,146,60,0.42)', fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Édition sur grille · upload Excel en masse</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>UDC · Address Book · Articles · Comptes GL</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>P00950 · P95921 · P0093 · P0092</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>On-premise · mono-tenant</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/liberty/nomajde/security-maintenance/user-management" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Ouvrir Maintenance sécurité →</Link>
    <Link to="/liberty/nomajde/master-data/udc-types" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>Explorer les données maîtres</Link>
  </div>
</div>

---

## Le problème que Nomajde résout

JD Edwards est un produit profond. La plupart des tâches quotidiennes — ajouter un utilisateur, rattacher un rôle, savoir où une table est utilisée, contrôler un serveur — demandent de naviguer entre cinq ou six formulaires, parfois entre le fat client et le web client. Les opérateurs finissent le travail ; ils y passent deux fois le temps nécessaire.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Ping-pong d'écrans</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Cinq écrans pour onboarder un utilisateur</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Créer l'utilisateur dans P0092, fixer le mot de passe dans le security workbench, rattacher les rôles dans P95921, choisir les environnements dans P0093, copier la sécurité depuis un utilisateur de référence — chaque écran isolé, avec son propre contrôle de données.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Édition en masse douloureuse</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Impossible d'ajouter 200 enregistrements de sécurité d'un coup</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Les formulaires JDE éditent une ligne à la fois. Quand un déploiement apporte 200 enregistrements de sécurité ou relations de rôles, l'opérateur les saisit à la main — ou bricole un script SQL en espérant que rien ne casse.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Des montées de version à l'aveugle</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Que touche une nouvelle version ?</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Quels objets spécifiques un ESU ou une version modifie, ce qui les utilise, qui les lance encore : la réponse se trouve d'ordinaire dans un classeur reconstruit à la main à chaque montée de version.</div>
  </div>
</div>

Nomajde remplace le ping-pong d'écrans par une page par sujet, l'édition ligne à ligne par l'édition sur grille et l'upload Excel, et le classeur fait main par une analyse de montée de version construite à partir de JD Edwards lui-même.

---

## Ce qu'est Nomajde

Une application web installée à côté de JD Edwards qui lit ses données en direct — en SQL sur les tables de sécurité et les tables maîtres, et via l'API REST AIS de JDE pour les opérations qui exigent un workflow JDE (réinitialisation de mot de passe, provisionnement d'utilisateur, surcharges d'options de traitement). Chaque écran écrit dans JDE — aucune copie intermédiaire, aucun rejeu différé.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(251,146,60,0.025))', display: 'grid', gridTemplateColumns: 'minmax(170px, 1fr) minmax(220px, 1.35fr) minmax(180px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Derrière les écrans</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>SQL — tables sécurité & maîtres</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>F0092 · F00926 · F95921 · F0093 · F00950 · F0004 · F0005</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>API REST AIS</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>token · provisionnement · mot de passe</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Server Manager</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>instances · mesures · caches</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>JDE Object Librarian</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>menus · objets · versions</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(251,146,60,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Nomajde</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>Le compagnon JD Edwards</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Données maîtres</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>UDC · Address Book</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Sécurité</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>utilisateurs · rôles · workbench</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Supervision</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>serveurs · performance</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Montée de version</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>reprise · références croisées</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Travail quotidien</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.45)', background: 'rgba(34,197,94,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Édition sur grille</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>en ligne · mise à jour en masse</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Upload Excel</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>lots intégrateur · déploiements</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Grilles drill-down</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>filtre sur chaque colonne</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Piste d'audit</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>qui a changé quoi, quand</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Direct vers JDE</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Chaque écriture frappe les tables JDE et l'API AIS comme le ferait le fat client — le changement est visible au prochain rafraîchissement JDE.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#22c55e'}}>Édition en masse</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Import Excel sur les écrans de sécurité modifiables — utilisateurs, rôles, relations de rôles, environnements, security workbench, sécurité UDO. Charger un déploiement en quelques minutes.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#c084fc'}}>Audit tracé</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Chaque modification porte l'utilisateur Nomajde, l'horodatage et l'écran d'origine — JDE le voit, et l'Audit Trail aussi.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#fb923c'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Déploiement mono-tenant, à côté des serveurs JDE. Pas de SaaS. Les identifiants et les données maîtres ne sortent jamais du périmètre.</div>
  </div>
</div>

---

## Les quatre piliers

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.10), rgba(74,158,255,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800, marginBottom: '8px'}}>01 · Données maîtres</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>UDC, Address Book, GL — éditables en masse</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Types UDC et valeurs UDC — chaque type et chaque valeur dans une grille avec recherche, filtres et export Excel.</li>
      <li>Carnet d'adresses, clients et fournisseurs — des grilles en consultation, avec leurs onglets liés et <i>Open in JDE</i>.</li>
      <li>Sociétés et comptes, articles, tables de paramétrage, projets OMW — 21 écrans en consultation livrés prêts à l'emploi, lus dans les tables de JDE.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(251,146,60,0.35)', background: 'linear-gradient(165deg, rgba(251,146,60,0.10), rgba(251,146,60,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fb923c', fontWeight: 800, marginBottom: '8px'}}>02 · Maintenance sécurité</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Utilisateurs · Rôles · Workbench</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Ajouter et modifier des utilisateurs JDE — SQL écrit le master utilisateur et les préférences d'affichage, l'API REST AIS provisionne le compte de sécurité et le mot de passe.</li>
      <li>Réinitialiser le mot de passe — un clic ; Nomajde appelle directement l'endpoint AIS JDE et le nouveau mot de passe est actif immédiatement.</li>
      <li>Importer la sécurité et Fusionner les rôles — copier ou fusionner le paramétrage de sécurité complet (application, action, ligne, colonne, options de traitement, onglet, sortie, image, UDO, menu filtering) depuis un utilisateur / rôle source vers une cible, dans un workflow guidé.</li>
      <li>Security Workbench — chaque type de sécurité JDE sur une grille, avec une boîte de dialogue qui s'adapte au type et upload Excel pour les lots intégrateur.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(34,197,94,0.35)', background: 'linear-gradient(165deg, rgba(34,197,94,0.10), rgba(34,197,94,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Développement & montée de version</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Qui utilise quoi, et ce que coûte une version</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Références croisées — ce que contient une application, un état, une table ou un UDO, et où il est utilisé, avec sa dernière utilisation.</li>
      <li>Analyse de montée de version — les objets à reprendre pour une version, leur complexité, les jours, l'ordre des travaux, les UDO à retester.</li>
      <li>Tests de non-régression joués par AIS — une référence enregistrée avant un changement, comparée après.</li>
      <li>Créer à partir de… — des points d'accès et des écrans complets construits à partir d'une application JD Edwards, enregistrés par ses propres formulaires.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.10), rgba(192,132,252,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c084fc', fontWeight: 800, marginBottom: '8px'}}>04 · Supervision</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>JDE en production, en direct</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Les serveurs enterprise, web et AIS contrôlés par Server Manager toutes les cinq minutes — état, santé, contrôles en échec.</li>
      <li>La disponibilité sur 24 heures de chaque instance sur la vue d'ensemble, les instances en défaut en tête.</li>
      <li>Un contrôle en échec déclenche les alertes de la tâche ; une instance en échec peut être arrêtée automatiquement.</li>
      <li>Synthèse de la plateforme et Architecture — la plateforme en un coup d'œil, dessinée d'après ce qui est trouvé ; Server Manager en direct, conseils de Performance, Analyse de la plateforme et Audit de la base de données — ce qui ralentit la plateforme, et par où commencer.</li>
    </ul>
  </div>

</div>

---

## La carte de l'application

Le menu suit le travail, du point d'entrée aux tâches de maintenance.

| Section | Ce qu'elle couvre |
|---|---|
| **Vue d'ensemble** | [Le point d'entrée](./home.md) : un groupe de liens par besoin, et les tâches avec leur dernière exécution. |
| **Synthèse de la plateforme** | [La plateforme en un coup d'œil](./synthesis.md) : six chiffres, ce que signalent les analyses des serveurs, des performances et de la base en une seule liste, l'architecture, un onglet par analyse. |
| **Préparer la montée de version** | [Une seule page pour toute l'analyse de montée de version](./upgrade/analysis.md) : ce qu'il faut reprendre pour une version, avec quelle complexité, en combien de jours, dans quel ordre et où en est le travail — à partir de la liste d'objets d'Oracle et des objets du client, avec les objets définis par l'utilisateur à retester. |
| **Explorateur de données** | L'[analyse libre](./data-explorer.md) des données de sécurité, de développement et de montée de version, et de dix-huit modèles sur les modules JD Edwards. |
| **Références croisées** | [Ce que contient un objet JD Edwards et où il est utilisé](./cross-reference.md) : applications, états, données, vues, tables, structures de données, fonctions métier, UDO. |
| **Données JD Edwards** | **Données de base** — [Types UDC](./master-data/udc-types.md) et [Codes UDC](./master-data/udc-codes.md), le [carnet d'adresses](./master-data/address-book.md) avec les clients et les fournisseurs, [Sociétés et comptes, Articles](./master-data/delivered-screens.md) — et [**Paramétrage**](./master-data/delivered-screens.md#setup) : conditions de paiement, devises et taux de change, zones de taxe, ICA, numéros suivants, règles d'activité des commandes, types de ligne, types de document, constantes de magasin / usine. Des grilles en consultation, livrées prêtes à l'emploi. |
| **Maintenance de la sécurité** | Gestion des utilisateurs, Préférences utilisateur, Gestion des rôles, Relations de rôles, Environnements, Security Workbench, Sécurité des UDO. Le catalogue de sécurité JD Edwards condensé en quelques écrans modifiables en grille. [Simulation de la sécurité](./security-maintenance/security-simulation.md) : ce qu'un utilisateur ou un rôle aurait le droit de faire, une hypothèse, un module sécurisé d'un bloc, la cohérence du workbench, des cas de test rejoués. |
| **Développement** | Object Librarian, Dictionnaire de données et l'[Object Management Workbench](./master-data/delivered-screens.md#omw) (projets, objets des projets, journal), en lecture ; [Retour au standard](./development/back-to-standard.md) : les objets standard modifiés et les copies comparés à ceux d'Oracle — ceux qui peuvent revenir tels quels, ceux qui diffèrent et en quoi. |
| **Supervision** | Dans l'ordre du menu : [Contrôle de santé JDE](./monitoring/jde-servers.md) : les vérifications des serveurs JD Edwards sur une période, et l'historique de chacun. [Server Manager](./monitoring/server-manager.md) : sept écrans lus en direct sur la console — instances (démarrées, arrêtées ou redémarrées depuis une ligne), utilisateurs connectés, serveurs d'entreprise, processus, fonctions métier, serveurs web et AIS, caches JDBj. [Architecture](./monitoring/architecture.md) : la plateforme dessinée d'après ce qui est trouvé. [Analyse de la plateforme](./monitoring/platform-analysis.md), [Performance](./monitoring/performance.md) et [Audit de la base de données](./monitoring/database-audit.md) : la plateforme lue en direct, sous forme d'analyses et de conseils. [Taille des serveurs](./monitoring/server-sizes.md) : la taille de chaque machine, telle qu'elle est renseignée. [Cible OCI](./monitoring/oci-target.md) : la plateforme proposée sur Oracle Cloud Infrastructure et son coût estimé. |
| **Tâches** | [Refusionner la sécurité, rafraîchir le dictionnaire de données, vérifier les serveurs JDE](./jobs.md), conserver les chiffres de la plateforme, surveiller les instances, envoyer par e-mail la synthèse de la plateforme et le rapport hebdomadaire de montée de version, comparer un path code au standard — avec un journal en direct. |
| **Tests** | [Tests de non-régression](./tests.md) joués par AIS : enregistrer une référence avant un changement, comparer après. |
| **Services JD Edwards (AIS)** | Le [catalogue de services AIS](./ais/services.md) et [Créer à partir de…](./ais/create-from.md) : un point d'accès ou un écran complet à partir d'une application, d'un formulaire, d'une table, d'un état, d'une fonction métier ou d'une orchestration JD Edwards. |

L'[assistant IA](./ai-assistant.md) connaît les références croisées, la montée de version et les performances de la plateforme, avec les mêmes données que les pages.

---

## Qui s'en sert

| Profil | Pourquoi on ouvre Nomajde |
|---|---|
| **Administrateur sécurité JDE** | Les écrans de Maintenance de la sécurité — ajouter un utilisateur, rattacher un rôle, exécuter Importer la sécurité sur un clone, parcourir la grille du Security Workbench. |
| **Développeur JDE** | [Références croisées](./cross-reference.md) — ce qu'une modification atteint avant de la faire : les applications, les états et les UDO qui utilisent une table, une vue ou une fonction. |
| **Référent données de base** | Carnet d'adresses, clients et fournisseurs, sociétés et comptes, articles ; types et valeurs UDC ; les tables de paramétrage. |
| **Chef de projet de montée de version** | [Préparer la montée de version](./upgrade/analysis.md) — les objets à reprendre, les jours par type et par personne, le suivi des travaux. |
| **Testeur fonctionnel** | [Tests de non-régression](./tests.md) — les cas qui doivent continuer de fonctionner, joués avant et après un ESU ou une version d'outils. |
| **Développeur d'intégration** | [Créer à partir de…](./ais/create-from.md) — un écran Liberty sur un formulaire JD Edwards, sans écrire un appel. |
| **Ingénieur d'exploitation** | D'abord la [Synthèse de la plateforme](./synthesis.md) et l'[Architecture](./monitoring/architecture.md) ; le [Contrôle de santé JDE](./monitoring/jde-servers.md) et [Server Manager](./monitoring/server-manager.md) pour la santé de chaque serveur ; [Performance](./monitoring/performance.md) pour ce qui ralentit la plateforme. |

---

## Rôles prédéfinis \{#roles\}

Nomajde livre cinq rôles prêts à ajouter, dans **Liberty Next → Administrer → Accès → Rôles → Ajouter un rôle prédéfini…** :

| Rôle | Ce qu'il couvre |
|---|---|
| **Gestionnaire des données de base** | Le dossier **Données de base** en lecture et modification — les UDC, le carnet d'adresses, Sociétés et comptes, Articles, et ce que les versions suivantes ajouteront à ce dossier ; le **Paramétrage** en lecture. |
| **Administrateur de la sécurité** | Les utilisateurs, rôles, environnements, le Security Workbench et la [simulation de la sécurité](./security-maintenance/security-simulation.md) de JD Edwards — le dossier **Maintenance de la sécurité** — en lecture et modification, avec les deux tâches qui reconstruisent la sécurité fusionnée (*Refusionner la sécurité*). |
| **Développeur** | En lecture : le dossier **Développement** (Object Librarian, Dictionnaire de données, Object Management Workbench, [Retour au standard](./development/back-to-standard.md)), les [Références croisées](./cross-reference.md), [Préparer la montée de version](./upgrade/analysis.md) et l'[Explorateur de données](./data-explorer.md) ; lance le [rapport hebdomadaire de montée de version](./jobs.md#report-upgrade) et la [comparaison au standard](./jobs.md#standard-compare). |
| **Exploitant de la plateforme** | En lecture : la [Synthèse de la plateforme](./synthesis.md), le dossier **Supervision** — serveurs, Server Manager, architecture, performance, analyse de la plateforme et de la base — et les **Tests** ; lance le contrôle de santé, la suite de tests, le [relevé de la plateforme](./jobs.md#platform-snapshot), la [surveillance des instances](./jobs.md#instances-watch) et le [rapport de plateforme](./jobs.md#report-platform). |
| **Administrateur** | Tout dans l'application : lecture et modification, y compris ses tâches et ses pages. |

Chacun ouvre la [Vue d'ensemble](./home.md) et l'[assistant IA](./ai-assistant.md). Une personne peut en cumuler plusieurs : les droits s'additionnent — un administrateur de la sécurité qui est aussi développeur voit les deux périmètres. Un rôle désigne des dossiers du menu, pas des écrans : il suit ses dossiers quand une version ultérieure y ajoute des écrans.

Au-delà de ces rôles, les accès s'accordent par les rôles de la plateforme, comme pour toute application : un rôle détient les entrées de menu qu'il ouvre, les pages, les tâches qu'il peut lancer et les services JD Edwards qu'il peut appeler — chaque point d'accès AIS ou Server Manager a sa propre permission. Un déploiement typique sépare les personnes qui entretiennent les données de base de celles qui gèrent les droits d'accès, et réserve à quelques-uns les services qui modifient JD Edwards ou la plateforme.
