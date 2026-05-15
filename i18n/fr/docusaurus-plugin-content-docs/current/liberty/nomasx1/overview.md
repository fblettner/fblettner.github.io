---
title: Nomasx-1 — La plateforme de conformité et d'optimisation de licences
description: "Nomasx-1 unifie sécurité applicative, Object Usage Tracking, conformité de licences Oracle et JD Edwards et analyse de la Séparation des tâches — agnostique de la source, prêt pour l'audit, on-premise."
keywords: [Nomasx-1, nomasx1, sécurité applicative, conformité, séparation des tâches, SoD, JD Edwards, JDE, Oracle, optimisation de licences, Object Usage Tracking, LDAP, audit, CSI]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# Nomasx-1

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(34,197,94,0.14) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>Sécurité applicative · Conformité de licences · Séparation des tâches</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Une plateforme pour tout ce que<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>l'audit ou la licence demande.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '780px', margin: '0 0 24px', opacity: 0.92}}>Conçu d'abord pour <b>JD Edwards EnterpriseOne sur Oracle</b> — un connecteur dédié lit le security workbench JDE, les tables utilisateurs / rôles / environnements, l'historique Object Usage Tracking et l'instance Oracle sous-jacente en une seule passe. L'architecture s'est depuis ouverte aux autres ERP et bases de données, mais un client JDE se branche et démarre immédiatement, sans export manuel ni job BIP à exécuter au préalable.</p>
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
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>par département · par appli</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(251,146,60,0.45)', background: 'rgba(251,146,60,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>Piste de validation</div>
        <div style={{fontSize: '10px', opacity: 0.78, marginTop: '2px'}}>exceptions · approbations</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Agnostique de la source</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>JDE aujourd'hui, SAP demain, une entité cédée sur NetSuite — un nouveau connecteur se branche sans toucher au reste du produit.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.35)', background: 'rgba(34,197,94,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#22c55e'}}>Continu</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Les scans suivent une planification. Le tableau de bord ouvert à 9h par l'auditeur est la photographie du dernier scan, pas le tableur du trimestre précédent.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.05)'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px', color: '#c084fc'}}>Prêt pour l'audit</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Chaque grille s'exporte en Excel, chaque exception laisse une piste de validation, chaque changement de la matrice SoD est tracé.</div>
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
      <li>Affectations de rôles avec dates d'effet et d'expiration — expiré-mais-toujours-actif remonte en rouge.</li>
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
    <div style={{fontSize: '17px', fontWeight: 700, marginBottom: '10px'}}>Où sont les conflits — et qui les a clôturés ?</div>
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

La photographie côté licence, une ligne par base × composant, avec un indicateur vert / rouge issu des scripts de collecte — le tableau de bord qu'un responsable licence ouvre avant chaque renouvellement.

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-glance-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#nx1-glance-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Oracle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="360" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="700" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">REQUIS</text>
  <text x="820" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP.</text>

  <rect x="60" y="128" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Enterprise Management</text>
  <text x="360" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostics Pack</text>
  <circle cx="720" cy="139" r="5" fill="#22c55e"/>
  <text x="820" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="152" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database</text>
  <text x="360" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition</text>
  <circle cx="720" cy="163" r="5" fill="#22c55e"/>
  <text x="820" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="176" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Active Data Guard</text>
  <circle cx="720" cy="187" r="5" fill="#ef4444"/>
  <text x="820" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="200" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <circle cx="720" cy="211" r="5" fill="#22c55e"/>
  <text x="820" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>

  <rect x="60" y="224" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Enterprise Edition Options</text>
  <text x="360" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Real Application Clusters</text>
  <circle cx="720" cy="235" r="5" fill="#ef4444"/>
  <text x="820" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE_PROD</text>
</svg>

Un deuxième exemple : une synthèse de Séparation des tâches par utilisateur, conflits classés par sévérité et conflits prouvés repérés.

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="nx1-sod-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#nx1-sod-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Conflits · Synthèse par utilisateur</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="22" rx="4" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="220" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="430" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="700" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SÉVÉRITÉ</text>
  <text x="830" y="115" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROUVÉ</text>

  <rect x="60" y="128" width="880" height="22" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="220" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Procure-to-Pay</text>
  <text x="430" y="143" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Créer fournisseur & poster paiement</text>
  <rect x="700" y="132" width="60" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="730" y="143" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Élevée</text>
  <circle cx="855" cy="139" r="5" fill="#f87171"/>

  <rect x="60" y="152" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="220" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Order-to-Cash</text>
  <text x="430" y="167" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Émettre facture & encaisser</text>
  <rect x="700" y="156" width="60" height="14" rx="3" fill="rgba(251,146,60,0.18)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="730" y="167" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Moyenne</text>
  <circle cx="855" cy="163" r="5" fill="#64748b"/>

  <rect x="60" y="176" width="880" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="220" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Record-to-Report</text>
  <text x="430" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Poster écriture & approuver clôture</text>
  <rect x="700" y="180" width="60" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="730" y="191" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Élevée</text>
  <circle cx="855" cy="187" r="5" fill="#f87171"/>
</svg>

---

## La carte de l'application

La barre latérale découpe le travail quotidien en cinq sections plus la zone de configuration.

| Section | Ce qu'elle couvre |
|---|---|
| **Vue d'ensemble** | Le tableau de bord — conflits ouverts, affectations qui expirent, écart de licence, statut du dernier rafraîchissement. |
| **Sécurité** | Utilisateurs, rôles, affectations, matrice des rôles (combinaisons), utilisateurs en doublon, utilisateurs sans rôle, réconciliation LDAP / AD. |
| **Applications** | Par application connectée : menus, droits (par utilisateur, par rôle, combinés), Object Usage Tracking (composants, objets, détails), conflits (synthèse, par utilisateur, par rôle, par objet), journal d'activité. |
| **Base de données** | Propriétés Oracle (édition, packs, options, partitions), Audit Trail (changements issus des archive logs Oracle), Audit Lookup (avant / après ligne à ligne). |
| **Licences** | Contrats CSI, photographie JD Edwards, licences Oracle requises, licences acquises, rapport d'utilisation, rapport financier. |
| **Paramètres** | Définitions des sources (applications, schémas JDE, catalogues Oracle), mappage des départements LDAP, configuration SoD (processus, activités, risques, objets, matrice), catalogue de prix, sécurité et indicateurs AD. |

---

## Qui s'en sert

| Rôle | Pourquoi on ouvre Nomasx-1 |
|---|---|
| **Auditeur interne** | La revue SoD trimestrielle — conflits ouverts, validations d'exceptions, tendance dans le temps. |
| **Responsable sécurité** | Le « qui a accès à X » du quotidien — catalogue utilisateurs et rôles, avec comptes dormants et affectations expirées repérés. |
| **Administrateur sécurité JDE** | Catalogue inter-environnements des utilisateurs et rôles, plus simple que le security workbench JDE, avec édition en masse dans Nomajde quand des changements sont nécessaires. |
| **Responsable licences** | Réconciliation requis-vs-acquis, preuves issues d'Object Usage Tracking, rapport d'écart financier avant chaque renouvellement. |
| **CISO / Risque** | Le tableau de bord de conformité — posture SoD, indicateurs d'hygiène des comptes, exposition de licence. |
| **DBA** | La photographie Oracle — options, fonctionnalités, partitions — sans écrire une seule requête. |

---

## Les rôles dans Nomasx-1

L'application embarque quatre rôles. Ils contrôlent ce que chaque utilisateur voit et peut modifier.

| Rôle | Ce qu'il accorde |
|---|---|
| **Viewer** | Lit chaque écran, exécute les rapports, aucune modification. |
| **Editor** | Tout ce que fait un Viewer, plus la mise à jour des matrices SoD, la planification des scans, la gestion des notifications. |
| **Auditor** | Tout ce que fait un Viewer, plus la validation des exceptions. Seul rôle habilité à clôturer un conflit signalé. |
| **Administrator** | Tout ce qui précède, plus la gestion de la configuration des sources (datasources ERP, comptes Oracle, mappage LDAP / AD). |

Un déploiement typique sépare **Auditor** d'**Administrator** — le principe que Nomasx-1 fait respecter ailleurs : la personne qui configure l'analyse ne doit pas être celle qui en valide les constats.
