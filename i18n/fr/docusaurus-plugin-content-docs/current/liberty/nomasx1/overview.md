---
title: Nomasx-1 — La plateforme de conformité et d'optimisation de licences
description: "Nomasx-1 réunit en une seule plateforme la sécurité applicative, l'Object Usage Tracking, la conformité des licences Oracle et JD Edwards et l'analyse de la séparation des tâches — quelle que soit la source applicative, prête pour l'audit, on-premise."
keywords: [Nomasx-1, nomasx1, sécurité applicative, conformité, séparation des tâches, SoD, JD Edwards, JDE, Oracle, optimisation de licences, Object Usage Tracking, LDAP, audit, CSI]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomasx-1

**Nomasx-1** est une plateforme de sécurité, de conformité des licences et de séparation des tâches éditée par Nomana-IT et construite avec Liberty Next. Pour toute application connectée, elle réunit la sécurité des utilisateurs et des rôles, le suivi d'utilisation, la conformité des licences Oracle et JD Edwards et l'analyse de séparation des tâches dans une seule application installée sur site, avec un connecteur prêt à l'emploi pour JD Edwards EnterpriseOne sur Oracle.

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(34,197,94,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>Sécurité applicative · Conformité de licences · Séparation des tâches</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Une seule plateforme pour tout ce qu'un<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>auditeur ou un responsable des licences attend.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Pensé d'abord pour <b>JD Edwards EnterpriseOne sur Oracle</b> : un connecteur dédié lit d'un seul tenant le Security Workbench JDE, les tables utilisateurs / rôles / environnements, l'historique Object Usage Tracking et l'instance Oracle sous-jacente. La plateforme s'est depuis ouverte à d'autres ERP et bases de données — mais pour un client JDE, il suffit de raccorder : c'est opérationnel d'emblée, sans export manuel ni job BIP à lancer au préalable.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(74,158,255,0.16)', border: '1px solid rgba(74,158,255,0.45)', fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>JD Edwards EnterpriseOne — support phare</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.42)', fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Oracle Database — scripts d'audit dédiés</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>SAP · NetSuite · ERP métier</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>MSSQL · HANA · PostgreSQL</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>LDAP · Active Directory · On-premise</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/liberty/nomasx1/security/users" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Parcourir la section Sécurité →</Link>
    <Link to="/liberty/nomasx1/licenses/oracle" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>Voir les rapports de licence</Link>
  </div>
</div>

<div style={{margin: '0 0 36px', padding: '22px 24px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(135deg, rgba(74,158,255,0.10), rgba(34,197,94,0.06))'}}>
  <div style={{display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '12px'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800}}>Combinaison phare</div>
    <div style={{fontSize: '18px', fontWeight: 700}}>JD Edwards EnterpriseOne · Oracle Database</div>
  </div>
  <p style={{fontSize: '13px', lineHeight: '1.6', margin: '0 0 14px', opacity: 0.88}}>Le <b>connecteur JD Edwards</b> de Nomasx-1 est le moteur d'origine du produit et il est inclus en standard. Il accède aux tables de sécurité JDE (utilisateurs, rôles, environnements, security workbench, menus), rapatrie l'historique Object Usage Tracking depuis le JDE Object Librarian et lit les vues DBA Oracle de la base sous-jacente — le tout depuis une seule datasource configurée. Un client JDE-sur-Oracle passe de l'installation à une première photographie prête pour l'audit en quelques heures, pas en semaines.</p>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px'}}>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.30)', background: 'rgba(74,158,255,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#4a9eff', marginBottom: '3px'}}>Tables de sécurité</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Utilisateurs, rôles, relations de rôles, environnements, security workbench — lus en direct.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.30)', background: 'rgba(251,146,60,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#fb923c', marginBottom: '3px'}}>Object Usage Tracking</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Comptes d'utilisateurs et dates de dernière utilisation par composant, issus directement de l'historique OUT.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.30)', background: 'rgba(34,197,94,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#22c55e', marginBottom: '3px'}}>Scripts d'audit Oracle</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Détectent les options, packs et fonctionnalités Oracle réellement utilisés sur chaque instance — inventaire des licences requises en un clic.</div>
    </div>
    <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.30)', background: 'rgba(192,132,252,0.05)'}}>
      <div style={{fontSize: '11px', fontWeight: 700, color: '#c084fc', marginBottom: '3px'}}>Aucun changement côté source</div>
      <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>Pas de job BIP à planifier, pas d'audit JDE à activer, aucun compte supplémentaire à provisionner au-delà d'une datasource en lecture seule.</div>
    </div>
  </div>
</div>

---

## Le problème que Nomasx-1 résout

Les équipes qui doivent répondre aux questions de conformité ne regardent jamais le même écran. Les données de sécurité sont dans le security workbench de l'ERP, les données de licence dans un tableur tenu à la main par les achats, les analyses SoD dans une matrice Excel inchangée depuis des mois, et les options de base de données dans des vues DBA que personne hors IT ne sait lire.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Sans vue unifiée</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Les comptes dormants gardent leurs droits</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Un utilisateur parti il y a un an détient encore le rôle d'approbation AP. Un conflit SoD ouvert en mars est toujours ouvert en octobre. Personne ne le voit avant l'audit suivant.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(251,146,60,0.3)', background: 'rgba(251,146,60,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Sans preuve d'usage</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Le coût des licences augmente tout seul</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Le renouvellement arrive. Personne ne peut dire quels modules JDE sont vraiment utilisés ni quelles options Oracle s'exécutent sur la base. La réponse sûre est de tout renouveler — au prix fort.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22c55e', fontWeight: 700, marginBottom: '8px'}}>Sans SoD continu</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Les constats SoX arrivent trop tard</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>La matrice SoD est dans un Excel sur le poste de quelqu'un. Le contrôle se fait une fois par an, deux semaines avant l'arrivée de l'auditeur. Chaque constat devient une remédiation en urgence.</div>
  </div>
</div>

Nomasx-1 remplace les tableurs, les exports manuels et la course annuelle par une photographie continue, maintenue par le produit lui-même.

---

## Ce qu'est Nomasx-1

Une plateforme unique qui aspire chaque source utile — ERP, base de données, annuaire — et la transforme en un petit ensemble de grilles, tableaux de bord et rapports utilisés au quotidien par l'équipe conformité.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(34,197,94,0.025))', display: 'grid', gridTemplateColumns: 'minmax(170px, 1fr) minmax(220px, 1.35fr) minmax(180px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Sources connectées</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Security workbench ERP</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>JDE · SAP · NetSuite · métier</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Catalogue base de données</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>Oracle · MSSQL · HANA · PG</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Annuaire</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>LDAP · Active Directory</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Object Usage Tracking</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>activité par composant</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(34,197,94,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Nomasx-1</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>La plateforme conformité & licences</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Inventorier</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>utilisateurs · rôles · droits</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Tracer l'usage</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>OUT · journal d'activité</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Analyser SoD</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>matrice · conflits</div>
      </div>
      <div style={{padding: '10px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '11px', fontWeight: 700}}>Optimiser coûts</div>
        <div style={{fontSize: '9px', opacity: 0.7, marginTop: '2px'}}>licences · packs</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px'}}>Sorties</div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(34,197,94,0.45)', background: 'rgba(34,197,94,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#22c55e'}}>Tableaux de bord conformité</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>posture SoD · expirations</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>Rapports de licence</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>usage · acquis · écart</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>Exports Excel</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>chaque grille · chaque tableau de bord</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Rapports d'audit</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>PDF · mensuel par e-mail</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Indépendant de la source</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>JDE aujourd'hui, SAP demain, une entité cédée sur NetSuite — un nouveau connecteur se raccorde sans toucher au reste du produit.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#22c55e'}}>Continu</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Les scans suivent une planification. Le tableau de bord ouvert à 9h par l'auditeur est la photographie du dernier scan, pas le tableur du trimestre précédent.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#c084fc'}}>Prêt pour l'audit</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Chaque grille et chaque tableau de bord s'exportent en Excel, les deux rapports d'audit sortent en PDF, et chaque collecte est datée dans Dernière collecte.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(251,146,60,0.35)', background: 'rgba(251,146,60,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#fb923c'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Déploiement mono-tenant. Les données de sécurité, les chiffres de licence et les constats SoD restent à l'intérieur du périmètre — pas d'envoi SaaS.</div>
  </div>
</div>

---

## Les quatre piliers

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.10), rgba(74,158,255,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4a9eff', fontWeight: 800, marginBottom: '8px'}}>01 · Sécurité & identité</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Qui a accès, et est-ce encore utile ?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Liste maître des utilisateurs avec création, dernière connexion, dernière activité et attributs ERP.</li>
      <li>Affectations de rôles avec dates d'effet et d'expiration — les affectations expirées sont comptées dans la Revue de sécurité.</li>
      <li>Réconciliation LDAP / AD — chaque compte ERP est rapproché de l'annuaire.</li>
      <li>Doublons, comptes dormants, comptes sans rôle — détectés automatiquement.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(251,146,60,0.35)', background: 'linear-gradient(165deg, rgba(251,146,60,0.10), rgba(251,146,60,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fb923c', fontWeight: 800, marginBottom: '8px'}}>02 · Object Usage Tracking</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Ce qui est réellement utilisé — par qui, à quelle fréquence ?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Enregistre chaque appel d'objet sur les applications connectées et l'agrège par composant de licence.</li>
      <li>Distingue les accès dormants (accordés mais jamais utilisés) des accès actifs.</li>
      <li>Comptes d'utilisateurs et dates de dernière utilisation par composant — la preuve derrière les chiffres de licence.</li>
      <li>Capture passive — aucun besoin d'activer l'audit ERP, aucun impact opérationnel.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(34,197,94,0.35)', background: 'linear-gradient(165deg, rgba(34,197,94,0.10), rgba(34,197,94,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#22c55e', fontWeight: 800, marginBottom: '8px'}}>03 · Conformité de licence</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Ce qui est payé, ce qui est requis, l'écart ?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Customer Support Identifiers et licences rattachées — le côté contractuel.</li>
      <li>Par base de données, la liste des options Oracle requises selon ce que les scripts de collecte ont trouvé sur l'instance.</li>
      <li>Cohortes JDE par application — utilisateurs activés, transactionnels, dormants, transactions orphelines.</li>
      <li>Rapport d'utilisation et Rapport financier — requis vs acquis et l'écart monétaire.</li>
    </ul>
  </div>

  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(248,113,113,0.35)', background: 'linear-gradient(165deg, rgba(248,113,113,0.10), rgba(248,113,113,0.02))'}}>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f87171', fontWeight: 800, marginBottom: '8px'}}>04 · Séparation des tâches</div>
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Où sont les conflits — et lesquels ont été exercés ?</div>
    <ul style={{margin: 0, paddingLeft: '18px', fontSize: '12px', lineHeight: '1.65', opacity: 0.86}}>
      <li>Matrice SoD éditable — risques ERP prédéfinis plus vos propres ajouts.</li>
      <li>Modèle processus / activité / risque — conflits décrits en langage métier, pas en couples de rôles bruts.</li>
      <li>Conflits classés par utilisateur, par rôle, par objet — l'ordre de remédiation.</li>
      <li>Conflits prouvés isolés des conflits théoriques — seules les actions utilisateur réellement effectuées.</li>
    </ul>
  </div>

</div>

---

## Un aperçu de ce qu'on voit

**Licences → Oracle** : les composants Oracle requis par chaque base, groupés par application, avec un indicateur vert / rouge issu des scripts de collecte — l'écran qu'un responsable licences ouvre avant chaque renouvellement.

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsor-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsor-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsor-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#nxsor-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Licences - Requises (ORACLE)</text>
  <rect x="454.1416" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="476.1416" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.license_oracle_required_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Filtres avancés</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">16 lignes · 11,3 ms</text>
  <rect x="952" y="134" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="135" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="139" x2="1018" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="162" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="628" y="162" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="746" y="162" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="767.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="794" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="857" y="162" width="77" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.5" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper (1)</text>
  <rect x="940" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="162" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">NOM DE L'APPLICATION</text>
  <text x="362" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">CATÉGORIE</text>
  <text x="558" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT</text>
  <text x="710" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LICENCE REQUISE</text>
  <rect x="240" y="220" width="840" height="22" fill="rgba(255,255,255,0.03)"/>
  <text x="252" y="234.5" fill="#e2e8f0" fontSize="8.8" fontWeight="700" fontFamily="system-ui, sans-serif">▾ 1 - ERP-PROD  (16)</text>
  <rect x="240" y="243" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="362" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="558" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="722" cy="254.0" r="3.2" fill="#f87171"/>
  <rect x="240" y="266" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="362" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="558" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <circle cx="722" cy="277.0" r="3.2" fill="#f87171"/>
  <rect x="240" y="289" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="362" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="558" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="722" cy="300.0" r="3.2" fill="#4ade80"/>
  <rect x="240" y="312" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="250" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="362" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="558" y="326.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="722" cy="323.0" r="3.2" fill="#4ade80"/>
  <rect x="240" y="335" width="840" height="22" fill="#0d1220"/>
  <text x="250" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="362" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="558" y="349.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="722" cy="346.0" r="3.2" fill="#f87171"/>
  <text x="240" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="368" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="381.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="380" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–17 sur 17 · 16 lignes au total</text>
  <rect x="992" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="368" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="381.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="368" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="381.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupé par application</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bloc par base</text>
  <line x1="200" y1="247.0" x2="260" y2="251" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper (1)</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le regroupement d'ouverture</text>
  <line x1="1120" y1="167.0" x2="895.5" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
  <rect x="1120" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Licence requise</text>
  <text x="1130" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vert = utilisée sur la base</text>
  <line x1="1120" y1="297.0" x2="728" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsor-arrow)"/>
</svg>

Un deuxième exemple : **Applications → Conflits → Synthèse**, les conflits de séparation des tâches par processus et par risque, avec le menu de ligne qui mène aux utilisateurs, rôles, objets et détails de chacun.

<svg viewBox="0 0 1320 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsso-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsso-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsso-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsso-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="334" rx="14" fill="url(#nxsso-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SoD - Synthèse</text>
  <rect x="348.5608" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="370.5608" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.sod_summary_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="100" width="840" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="115.5" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⛉  Filtres avancés</text>
  <text x="240" y="146" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">36 lignes · 7,4 ms</text>
  <rect x="952" y="134" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="135" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="147.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="139" x2="1018" y2="149" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="147.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="162" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="162" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="176.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="162" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="176.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="162" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="162" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="162" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="162" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="176.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="194" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="375" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="458" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID (ID)</text>
  <text x="546" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PROCESS ID</text>
  <text x="638" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID (ID)</text>
  <text x="712" y="209.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RISK ID</text>
  <rect x="240" y="220" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="223" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="234.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="234.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="546" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Procure to pay</text>
  <text x="638" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P01</text>
  <text x="712" y="234.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Create a supplier and pay it</text>
  <rect x="240" y="243" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="246" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="257.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="257.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="546" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Procure to pay</text>
  <text x="638" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">P2P04</text>
  <text x="712" y="257.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Receive goods and approve the invoice</text>
  <rect x="240" y="266" width="840" height="22" fill="#0d1220"/>
  <rect x="245" y="269" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="280.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="280.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="546" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Order to cash</text>
  <text x="638" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">O2C02</text>
  <text x="712" y="280.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Change prices and invoice</text>
  <rect x="240" y="289" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <rect x="245" y="292" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="303.5" fill="#cbd5e1" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⋯</text>
  <text x="359" y="303.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="375" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="458" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN</text>
  <text x="546" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Finance</text>
  <text x="638" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FIN03</text>
  <text x="712" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Post and approve journal entries</text>
  <text x="240" y="334" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="322" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="335.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="334" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–36 sur 36</text>
  <rect x="992" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="322" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="335.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="322" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="335.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="254" y="242" width="170" height="100" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="263" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Users</text>
  <text x="414" y="263" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="285" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Roles</text>
  <text x="414" y="285" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="307" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Objects</text>
  <text x="414" y="307" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="266" y="329" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Display Details</text>
  <text x="414" y="329" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Processus × risque</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issus de la matrice SoD</text>
  <line x1="200" y1="167.0" x2="556" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse détaillée</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs, rôles, objets, détails</text>
  <line x1="200" y1="317.0" x2="254" y2="292.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risque</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la paire incompatible, en clair</text>
  <line x1="1120" y1="267.0" x2="980" y2="242" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsso-arrow)"/>
</svg>

---

## La carte de l'application

Le menu s'ouvre sur les trois tableaux de bord, l'Explorateur de données et les rapports, puis viennent les sections de travail et les paramètres.

| Section | Ce qu'elle couvre |
|---|---|
| **Vue d'ensemble** | La [synthèse d'audit](./audit-synthesis.md) — utilisateurs, rôles, conflits SoD et exposition de licences en un coup d'œil, ce qui demande une décision, fraîcheur des données ; export Excel ou PDF. |
| **Séparation des tâches**, **Revue de sécurité** | Deux tableaux de bord sous la Vue d'ensemble : les [conflits](./sod-dashboard.md) — tendance, risques, paires de rôles, conflits avérés — et la [revue des accès](./security-review.md) — douze contrôles et les comptes à revoir d'abord. |
| **Explorateur de données** | L'[analyse libre](./data-explorer.md) des données de sécurité, de séparation des tâches et de licences, avec des analyses et tableaux de bord prêts à l'emploi. |
| **Rapports** | L'[audit des licences](./reports/audit-licences.md) et l'[évaluation Sécurité & SoD](./reports/security-sox.md), produits pour une application et téléchargés en PDF ou en Markdown. |
| **Dernière collecte** | La dernière collecte de chaque module par application, groupée par module ; un clic sur une ligne ouvre l'exécution qui l'a produite. |
| **Sécurité** | Utilisateurs, rôles, affectations, matrice des rôles (combinaisons), utilisateurs en doublon, utilisateurs sans rôle, réconciliation LDAP / AD. |
| **Applications** | Par application connectée : menus, droits (par utilisateur, par rôle, combinés), Object Usage Tracking (composants, objets, détails), conflits (synthèse, par utilisateur, par rôle, par objet), journal d'activité. |
| **Base de données** | Propriétés Oracle (édition, packs, options, partitions), Audit Trail (changements issus des archive logs Oracle), Audit Lookup (avant / après ligne à ligne). |
| **Licences** | Contrats CSI, photographie JD Edwards, licences Oracle requises, licences acquises, rapport d'utilisation, rapport financier. |
| **Tâches** | [Collecter la sécurité et la SoD ou les licences, produire les deux rapports d'audit](./jobs.md), pour une ou plusieurs applications, avec un journal en direct. |
| **Paramètres** | Définitions des sources (applications, schémas JDE, catalogues Oracle), mappage des départements LDAP, configuration SoD (processus, activités, risques, objets, matrice), catalogue de prix, sécurité et indicateurs AD. |

---

## Qui s'en sert

| Rôle | Pourquoi on ouvre Nomasx-1 |
|---|---|
| **Auditeur interne** | La revue SoD trimestrielle — conflits ouverts, conflits avérés par l'activité, tendance dans le temps. |
| **Responsable sécurité** | Le « qui a accès à X » du quotidien — catalogue utilisateurs et rôles, avec comptes dormants et affectations expirées repérés. |
| **Administrateur sécurité JDE** | Catalogue inter-environnements des utilisateurs et rôles, plus simple que le security workbench JDE, avec édition en masse dans Nomajde quand des changements sont nécessaires. |
| **Responsable licences** | Réconciliation requis-vs-acquis, preuves issues d'Object Usage Tracking, rapport d'écart financier avant chaque renouvellement. |
| **CISO / Risque** | Le tableau de bord de conformité — posture SoD, indicateurs d'hygiène des comptes, exposition de licence. |
| **DBA** | La photographie Oracle — options, fonctionnalités, partitions — sans écrire une seule requête. |

---

## Les rôles dans Nomasx-1 \{#roles\}

Nomasx-1 livre quatre rôles prédéfinis :

| Rôle | Pour |
|---|---|
| **Auditeur** (`nomasx1_auditor`) | Lit tout et lance les deux rapports d'audit. Ne modifie aucun réglage. Il reçoit les rapports mensuels. |
| **Responsable sécurité** (`nomasx1_security_officer`) | Sécurité et séparation des tâches en lecture et modification, avec leurs réglages, la collecte de la sécurité et son rapport. Le reste en lecture. |
| **Gestionnaire des licences** (`nomasx1_licence_manager`) | Licences et base de données en lecture et modification, avec les réglages des licences, la collecte des licences et son rapport. Le reste en lecture. |
| **Administrateur** (`nomasx1_admin`) | Tout dans l'application : lecture et modification, y compris les réglages et les tâches de son menu. |

Chaque rôle désigne des dossiers du menu : il suit donc ces dossiers quand une version y ajoute des écrans. Une même personne peut en cumuler plusieurs — un responsable sécurité également gestionnaire des licences : les droits s'additionnent.

Ils s'ajoutent un par un dans **Liberty Next → Administrer → Accès → Rôles → Ajouter un rôle prédéfini…** (voir [Rôles prédéfinis](../framework/build/secure/roles-and-permissions.md#predefined)), ou tous les quatre d'un coup avec la tâche [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles), qui donne en plus à l'administrateur toutes les tâches `nomasx1-*`. Relancée, la tâche rétablit les droits livrés sur un rôle modifié dans Accès ; les utilisateurs ne sont pas touchés.

Un déploiement typique sépare les auditeurs des administrateurs : la personne qui configure l'analyse n'est pas celle qui en examine les constats. Voir [Tâches](./jobs.md#access).
