---
title: Nomajde — L'application compagnon de JD Edwards
description: "Nomajde s'installe à côté de JD Edwards EnterpriseOne et regroupe le travail quotidien — données maîtres, sécurité, reporting, supervision — sur une série de grilles avec édition en ligne. SQL et AIS API combinés, pas de navigation fat-client, pas d'export manuel."
keywords: [Nomajde, JD Edwards, JDE, EnterpriseOne, security workbench, gestion des utilisateurs, gestion des rôles, UDC, BIP, supervision, AIS, compagnon JDE]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomajde

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(251,146,60,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>JD Edwards EnterpriseOne · Application compagnon</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Le travail JD Edwards,<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>sur une grille filtrable.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Nomajde est le compagnon quotidien de JD Edwards EnterpriseOne. Il regroupe sur un ensemble réduit de grilles modifiables en ligne ce que JDE répartit habituellement sur plusieurs formulaires — master utilisateur, description des rôles, security workbench, environnements, tables UDC, transactions, planification BIP. Chaque modification est écrite dans JDE en direct : <b>SQL</b> sur les tables de sécurité et les tables maîtres pour la majorité des actions, <b>appels REST AIS</b> pour celles que JDE n'accepte que par cette voie (réinitialisation de mot de passe, provisionnement du compte de sécurité). Aucune copie intermédiaire, aucun traitement nocturne à attendre.</p>
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

JD Edwards est un produit profond. La plupart des tâches quotidiennes — ajouter un utilisateur, rattacher un rôle, modifier une valeur UDC, planifier un état BIP — demandent de naviguer entre cinq ou six formulaires, parfois entre le fat client et le web client. Les opérateurs finissent le travail ; ils y passent deux fois le temps nécessaire.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Ping-pong d'écrans</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Cinq écrans pour onboarder un utilisateur</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Créer l'utilisateur dans P0092, fixer le mot de passe dans le security workbench, rattacher les rôles dans P95921, choisir les environnements dans P0093, copier la sécurité depuis un utilisateur de référence — chaque écran isolé, avec son propre contrôle de données.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Édition en masse douloureuse</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Impossible de modifier 200 valeurs UDC d'un coup</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Les formulaires JDE éditent une ligne à la fois. Quand l'intégrateur livre un nouveau module avec 200 valeurs UDC, l'opérateur les saisit à la main — ou bricole un script SQL en espérant que rien ne casse.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Reporting en marge</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Les runs BIP ne laissent aucune trace</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Planifier un état BIP passe par le planificateur JDE, la sortie atterrit là où la file d'impression l'a déposée, et l'audit du « qui a lancé quoi, quand » repose sur la mémoire de l'opérateur.</div>
  </div>
</div>

Nomajde remplace le ping-pong d'écrans par une page par sujet, l'édition ligne à ligne par l'édition sur grille et l'upload Excel, et la trace inexistante par un historique de chaque run et de chaque modification.

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
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Planificateur BIP</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>planifier · archiver · renvoyer</div>
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
        <div style={{fontSize: '11px', fontWeight: 700}}>Transactions</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>AP · AR · GL</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Reporting</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>BIP · archive</div>
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
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Upload Excel sur chaque écran modifiable — UDC, security workbench, relations de rôles, environnements. Charger un déploiement en quelques minutes.</div>
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
      <li>Types UDC et valeurs UDC — une grille par sujet, avec upload Excel pour les chargements de déploiement.</li>
      <li>Address Book, clients, fournisseurs, articles, comptes GL — même forme, même édition sur grille.</li>
      <li>Les contrôles de champs obligatoires que JDE applique à la sauvegarde sont appliqués ici aussi — aucune ligne incomplète n'atteint JDE.</li>
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
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Transactions & Reporting</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>AP, AR, GL — et l'archive BIP</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Grilles AP, AR, GL — filtrer sur chaque colonne (société, fournisseur, document, montant, date), drill vers le détail.</li>
      <li>Planifier des états BIP depuis un formulaire unique — choisir le programme, la version, la sélection de données, l'heure de run.</li>
      <li>La sortie générée (PDF ou XML) est archivée à côté du run. Télécharger, envoyer par courriel, renvoyer en un clic.</li>
      <li>Chaque run BIP est tracé — qui l'a planifié, quand il a tourné, ce qu'il a produit.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.10), rgba(192,132,252,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c084fc', fontWeight: 800, marginBottom: '8px'}}>04 · Supervision</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>JDE en production, en direct</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Compteurs en direct des transactions AP / AR / GL, drill vers l'écran sous-jacent.</li>
      <li>La file de job-control JDE sous forme de grille — statut, propriétaire, durée, sortie.</li>
      <li>Indicateurs de performance : latence base, temps de réponse AIS, débit transactionnel.</li>
    </ul>
  </div>

</div>

---

## La carte de l'application

La barre latérale découpe le travail quotidien en cinq sections.

| Section | Ce qu'elle couvre |
|---|---|
| **Tableau de bord** | Résumé d'activité du jour — transactions ouvertes, jobs en cours, utilisateurs récents, dernières alertes. |
| **Données maîtres** | Types UDC et valeurs UDC, Address Book, clients, fournisseurs, articles, comptes GL. Chaque grille gère filtre, tri, édition en ligne et upload Excel. |
| **Maintenance sécurité** | Gestion des utilisateurs, Gestion des rôles, Relations de rôles, Environnements, Security Workbench. Le catalogue complet de sécurité JDE, condensé en cinq écrans avec édition sur grille et workflow Importer / Fusionner guidé. |
| **Transactions** | Grilles AP, AR, GL avec filtres et drill vers le détail. |
| **Reporting** | Planifier des jobs BIP depuis un formulaire, archive des runs passés, distribution par courriel. |
| **Supervision** | Compteurs de transactions en direct, file de job-control JDE sous forme de grille, indicateurs de performance (latence base, temps de réponse AIS, débit). |
| **Paramètres** | Définitions d'environnements, endpoint AIS, serveur de courriel, rétention de l'archive. |

---

## Qui s'en sert

| Rôle | Pourquoi on ouvre Nomajde |
|---|---|
| **Administrateur sécurité JDE** | Les cinq écrans de Maintenance sécurité — ajouter un utilisateur, rattacher un rôle, exécuter Importer la sécurité sur un clone, parcourir la grille security workbench. |
| **Opérateur AP / AR** | La grille de transactions — factures ouvertes inter-sociétés et inter-environnements sur une page, avec filtres en masse et drill. |
| **Référent données maîtres** | Maintenance Address Book, clients, fournisseurs avec contrôles de champs obligatoires ; types et valeurs UDC pour le catalogue. |
| **Analyste reporting** | Un formulaire unique pour planifier BIP, l'archive des runs passés, la distribution par courriel. |
| **Ingénieur ops** | La section Supervision — compteurs en direct, file de jobs, indicateurs de performance. |

---

## Les rôles dans Nomajde

L'application embarque quatre rôles.

| Rôle | Ce qu'il accorde |
|---|---|
| **Viewer** | Lit chaque écran, exécute les rapports, aucune modification. |
| **Operator** | Tout ce que fait un Viewer, plus les modifications AP / AR / données maîtres et la planification de rapports. |
| **Security** | Tout ce que fait un Operator, plus la section Maintenance sécurité (Utilisateurs, Rôles, Relations de rôles, Environnements, Security Workbench). |
| **Administrator** | Tout ce qui précède, plus la configuration des environnements, l'endpoint AIS et la rétention de l'archive. |

Un déploiement typique sépare **Operator** de **Security** — la personne qui traite les transactions n'est pas celle qui gère les droits d'accès.
