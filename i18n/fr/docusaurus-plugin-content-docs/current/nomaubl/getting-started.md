---
title: NomaUBL — la plateforme de facturation électronique unifiée
description: "NomaUBL relie n'importe quel ERP à la Réforme de la Facturation Électronique — génération UBL, validation amont, routage vers la Plateforme Agréée, suivi du cycle de vie et opérations dans une seule plateforme. Indépendante de la source, indépendante de la PA, prête pour la vague RFE 2026."
keywords: [NomaUBL, e-invoicing, e-reporting, Réforme de la Facturation Électronique, RFE, UBL, Plateforme Agréée, Plateforme de Dématérialisation Partenaire, PDP, JD Edwards, SAP, NetSuite, ERP personnalisé, Schematron, EN 16931, extended-ctc-fr, B2B, B2G, B2C, démarrer]
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';

# NomaUBL

<div style={{padding: '36px 32px', borderRadius: '18px', margin: '8px 0 36px', background: 'linear-gradient(135deg, rgba(74,158,255,0.18) 0%, rgba(109,40,217,0.18) 100%)', border: '1px solid rgba(74,158,255,0.35)', position: 'relative', overflow: 'hidden'}}>
  <div style={{display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(74,158,255,0.2)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '14px'}}>Réforme de la Facturation Électronique · vague 2026</div>
  <h2 style={{fontSize: '34px', lineHeight: '1.15', fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em'}}>Reliez n'importe quel ERP à la<br/><span style={{background: 'linear-gradient(135deg, #4a9eff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Réforme de la Facturation Électronique.</span></h2>
  <p style={{fontSize: '16px', lineHeight: '1.6', maxWidth: '740px', margin: '0 0 24px', opacity: 0.92}}>NomaUBL est la plateforme unifiée qui s'intercale entre votre système comptable et la Plateforme Agréée. Elle génère un UBL conforme depuis <b>n'importe quel ERP</b>, valide chaque facture en amont via XSD, Schematron et l'extension CTC française, transmet à <b>n'importe quelle plateforme agréée</b>, et suit chaque facture sur l'intégralité de son cycle de vie — dépôt, litige, paiement, annulation.</p>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px'}}>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>📦 JD Edwards · SAP · NetSuite · ERP personnalisé</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>✅ EN 16931 + extended-ctc-fr</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>🔌 Plateforme Agréée pluggable</span>
    <span style={{padding: '7px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '12px', fontWeight: 600}}>🛠 Opérations en libre-service</span>
  </div>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
    <Link to="/nomaubl/configuration" style={{padding: '11px 22px', borderRadius: '8px', background: 'linear-gradient(135deg, #4a9eff, #2b8cff)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(74,158,255,0.3)'}}>Configurer un environnement →</Link>
    <Link to="/nomaubl/application" style={{padding: '11px 22px', borderRadius: '8px', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.18)', fontSize: '13px', fontWeight: 600, textDecoration: 'none'}}>Découvrir l'application</Link>
  </div>
</div>

---

## Le défi — et pourquoi une PA seule ne suffit pas

La *Réforme de la Facturation Électronique* (RFE) rend la facturation électronique structurée **obligatoire** pour toutes les transactions B2B. Les entreprises doivent :

- **Générer** des documents UBL structurés conformes à EN 16931 + l'extension CTC française.
- **Transmettre** ces documents à la Plateforme Agréée du destinataire — la nouvelle voie supervisée par l'État.
- **Déclarer** les transactions B2C, intra-UE et hors champ via le flux d'e-reporting pour la TVA.
- **Suivre** le cycle de vie de chaque facture jusqu'au paiement, au litige, au refus ou à l'annulation.

La Plateforme Agréée gère la **voie de transmission** — mais pas le pipeline en amont. La comptabilité doit toujours **produire un UBL conforme à partir d'une sortie ERP qui ne l'est pas**, **détecter les rejets avant le dépôt**, **router par type de document**, et **opérer** litiges, redépôts, accusés de paiement et pistes d'audit.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,69,58,0.3)', background: 'rgba(255,69,58,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f87171', fontWeight: 700, marginBottom: '8px'}}>Sans validation amont</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Cycles de rejet — facturés malgré tout</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Une Plateforme Agréée facture chaque facture <i>transmise</i> — acceptée <b>ou</b> rejetée. Toute erreur Schematron détectée en aval signifie une facture rejetée, une correction manuelle, un redépôt, un retard d'encaissement — et un coût de transmission. La validation amont supprime l'aller-retour et son coût.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,159,10,0.3)', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Sans couche d'opérations</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Angles morts du cycle de vie</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Refus, litiges et codes de recouvrement appellent une action côté finance. La PA les enregistre — vos opérations ne les voient pas.</div>
  </div>
  <div style={{padding: '18px', borderRadius: '12px', border: '1px solid rgba(0,122,255,0.3)', background: 'rgba(0,122,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#60a5fa', fontWeight: 700, marginBottom: '8px'}}>Sans flexibilité source</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Verrouillage fournisseur</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55'}}>Un module spécifique à un ERP vous lie à un éditeur. Un développement maison vous lie à une équipe. Les deux échouent dès que la réglementation évolue.</div>
  </div>
</div>

---

## Ce qu'est NomaUBL

NomaUBL est une **plateforme mono-tenant, on-premise** qui couvre l'intégralité du pipeline entre votre système comptable et la Plateforme Agréée. C'est la couche où les factures sont **générées, validées, déposées, suivies et reprises** — indépendamment de l'ERP qui les a produites et de la PA qui les reçoit.

<div style={{margin: '32px 0', padding: '24px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(165deg, rgba(74,158,255,0.04), rgba(109,40,217,0.025))', display: 'grid', gridTemplateColumns: 'minmax(160px, 1fr) minmax(220px, 1.35fr) minmax(170px, 1fr)', gap: '22px', alignItems: 'center'}}>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}>
      <span style={{fontSize: '13px'}}>📥</span> Systèmes sources
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4a9eff'}}>JD Edwards</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>BIP · archive · FTP</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(50,215,75,0.35)', background: 'rgba(50,215,75,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#4ade80'}}>SAP</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>IDoc · spool · fichier</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,159,10,0.35)', background: 'rgba(255,159,10,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#fb923c'}}>NetSuite</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>SuiteScript · fichier</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(192,132,252,0.35)', background: 'rgba(192,132,252,0.06)'}}>
        <div style={{fontSize: '12px', fontWeight: 700, color: '#c084fc'}}>ERP personnalisé</div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>fichier · API · BD</div>
      </div>
    </div>
  </div>

  <div style={{position: 'relative', padding: '26px 22px', borderRadius: '18px', border: '1px solid rgba(74,158,255,0.5)', background: 'linear-gradient(160deg, rgba(74,158,255,0.22), rgba(109,40,217,0.18))', boxShadow: '0 12px 40px rgba(74,158,255,0.18), inset 0 1px 0 rgba(255,255,255,0.08)', textAlign: 'center'}}>
    <div style={{position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', fontSize: '22px', color: '#4a9eff', fontWeight: 800, lineHeight: 1, textShadow: '0 0 8px rgba(74,158,255,0.5)'}}>→</div>
    <div style={{fontSize: '32px', marginBottom: '4px', lineHeight: 1}}>✨</div>
    <div style={{fontSize: '22px', fontWeight: 800, marginBottom: '2px', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #4a9eff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>NomaUBL</div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.72, marginBottom: '16px', fontWeight: 600}}>La couche e-invoicing unifiée</div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px'}}>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '15px', marginBottom: '2px'}}>📄</div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Génère l'UBL</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '15px', marginBottom: '2px'}}>✅</div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Valide en amont</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '15px', marginBottom: '2px'}}>📊</div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Suit le cycle de vie</div>
      </div>
      <div style={{padding: '8px 6px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div style={{fontSize: '15px', marginBottom: '2px'}}>🛠</div>
        <div style={{fontSize: '10px', fontWeight: 700}}>Opère</div>
      </div>
    </div>
  </div>

  <div>
    <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, opacity: 0.65, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px'}}>
      <span style={{fontSize: '13px'}}>📡</span> Plateforme Agréée
    </div>
    <div style={{padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(192,132,252,0.45)', background: 'rgba(192,132,252,0.07)', marginBottom: '14px', boxShadow: '0 2px 10px rgba(192,132,252,0.06)'}}>
      <div style={{fontSize: '13px', fontWeight: 800, color: '#c084fc', marginBottom: '3px'}}>PA / PDP</div>
      <div style={{fontSize: '10px', opacity: 0.78, lineHeight: '1.45'}}>Backend configurable — toute PA agréée</div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '10px 12px', borderRadius: '8px', background: 'rgba(74,158,255,0.05)', border: '1px solid rgba(74,158,255,0.3)', position: 'relative'}}>
        <div style={{fontSize: '9px', textTransform: 'uppercase', color: '#4a9eff', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '4px'}}>→ E-invoicing</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{fontSize: '14px'}}>🏢</span>
          <div style={{fontSize: '12px', fontWeight: 700}}>Acheteur</div>
        </div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>via la PA du destinataire</div>
      </div>
      <div style={{padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,159,10,0.04)', border: '1px dashed rgba(255,159,10,0.45)', position: 'relative'}}>
        <div style={{fontSize: '9px', textTransform: 'uppercase', color: '#fb923c', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '4px'}}>⇢ E-reporting</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{fontSize: '14px'}}>🏛</span>
          <div style={{fontSize: '12px', fontWeight: 700}}>Administration fiscale</div>
        </div>
        <div style={{fontSize: '10px', opacity: 0.7, marginTop: '2px'}}>via la PA</div>
      </div>
    </div>
  </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', margin: '20px 0 8px'}}>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '20px', marginBottom: '4px'}}>🔌</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>Indépendant de la PA</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Changer de Plateforme Agréée sans reconstruire la chaîne — le connecteur est de la configuration, pas du code.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '20px', marginBottom: '4px'}}>📦</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>Indépendant de l'ERP</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>JDE aujourd'hui, SAP demain, une cession l'an prochain — un nouveau template s'intègre sans toucher au reste.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '20px', marginBottom: '4px'}}>🇫🇷</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>CTC français prêt</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>EN 16931 + profil <code>extended-ctc-fr</code>, routage BAR, tracks d'e-reporting et Cadre de facturation embarqués.</div>
  </div>
  <div style={{padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(74,158,255,0.35)', background: 'rgba(74,158,255,0.05)'}}>
    <div style={{fontSize: '20px', marginBottom: '4px'}}>🏠</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>On-premise</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.5'}}>Déploiement mono-tenant. UBL, historique et identifiants restent dans votre périmètre — et survivent à une indisponibilité PA.</div>
  </div>
</div>

---

## Le pipeline complet, sur une seule plateforme

Un déploiement NomaUBL couvre chaque étape, de la sortie ERP brute à la facture suivie et payée :

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '10px', margin: '28px 0 12px'}}>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>01</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>📥</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Extraire</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>archive · FTP/SFTP · BIP</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>02</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>🔄</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Transformer</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>XSLT · BIP RTF→XSL · burst</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>03</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>📄</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Générer l'UBL</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>EN 16931 + CTC-FR</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>04</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>✅</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Valider</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>XSD · Schematron · règles</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>05</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>📤</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Déposer</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>toute Plateforme Agréée</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>06</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>📊</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Suivre</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>cycle de vie · litiges · paiements</div>
  </div>

  <div style={{padding: '20px 14px 18px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.14), rgba(74,158,255,0.02))', textAlign: 'center', position: 'relative', boxShadow: '0 2px 10px rgba(74,158,255,0.06)'}}>
    <div style={{position: 'absolute', top: '8px', left: '12px', fontSize: '10px', fontWeight: 800, color: '#4a9eff', letterSpacing: '0.1em'}}>07</div>
    <div style={{fontSize: '30px', marginBottom: '10px', lineHeight: 1}}>🛠</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', color: '#4a9eff'}}>Opérer</div>
    <div style={{fontSize: '11px', opacity: 0.78, lineHeight: '1.45'}}>set status · resend · e-mail · avoir</div>
  </div>

</div>

| Étape | Rôle de NomaUBL |
|---|---|
| **Extraire** | Récupère les documents source depuis la BIP Print Queue de JDE, les répertoires d'archive JDE, les serveurs FTP/SFTP ou le système de fichiers local. Polling automatique ou à la demande. |
| **Transformer** | Applique un pré-traitement XSLT, convertit les templates BI Publisher RTF en XSL, et éclate les spools multi-documents par clé de burst configurable. |
| **Générer l'UBL** | Produit des documents UBL 2.1 structurés en s'appuyant sur les valeurs par défaut par template : parties, schemeID, routage BAR, types de processus métier, catégories d'allowance / charge, mentions légales françaises. |
| **Valider** | Exécute XSD + Schematron + l'extension CTC française avant qu'aucun document ne quitte votre périmètre. Affiche chaque erreur, avertissement et indication de reprise en ligne. |
| **Déposer** | Transmet à la Plateforme Agréée configurée via un connecteur pluggable. Le backend PA est de la configuration — il s'échange sans modification de code. |
| **Suivre** | Interroge la PA pour récupérer les mises à jour de statut et persiste le cycle de vie complet : déposée, reçue, payée, en litige, refusée, rejetée — avec motifs, actions attendues et horodatages. |
| **Opérer** | Présente la bonne action à la bonne étape : redéposer, envoyer le PDF par e-mail, marquer paiement reçu, émettre un avoir, mettre à jour un statut, annuler en compta — pilotée par des connecteurs API configurables. |

---

## Une plateforme, tous les systèmes sources

NomaUBL repose sur un **modèle de templates** : chaque source produit du XML, NomaUBL le projette via un template, et tous les autres modules opèrent sur l'UBL résultant — quel que soit l'ERP qui l'a alimenté. Ajouter une nouvelle source est une tâche de configuration, pas une refonte d'architecture.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.4)', background: 'linear-gradient(160deg, rgba(74,158,255,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(74,158,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#4a9eff'}}>🅹</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>JD Edwards</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Intégration native avec la BIP Print Queue JDE (<code>F9563110</code> / <code>F95630</code> / <code>F95631</code>), le répertoire d'archive et les téléchargements FTP/SFTP.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>BIP extract</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>Archive</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(74,158,255,0.12)', fontSize: '10px', fontWeight: 600, color: '#4a9eff'}}>Templates RTF</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(50,215,75,0.4)', background: 'linear-gradient(160deg, rgba(50,215,75,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(50,215,75,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#4ade80'}}>🅂</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>SAP</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Extractions IDoc, spool ou fichier alimentent NomaUBL via les canaux directory ou FTP. Les templates projettent les champs SAP vers la sémantique UBL.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(50,215,75,0.12)', fontSize: '10px', fontWeight: 600, color: '#4ade80'}}>Mapping Bukrs</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,159,10,0.4)', background: 'linear-gradient(160deg, rgba(255,159,10,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,159,10,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#fb923c'}}>🄽</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>NetSuite</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Les exports SuiteScript déposent un XML dans le répertoire surveillé ; les templates gèrent le mapping subsidiary, code de TVA et devise.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,159,10,0.12)', fontSize: '10px', fontWeight: 600, color: '#fb923c'}}>Mapping subsidiary</span>
    </div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.4)', background: 'linear-gradient(160deg, rgba(192,132,252,0.08), transparent)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <div style={{width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(192,132,252,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 800, color: '#c084fc'}}>🅒</div>
      <div style={{fontWeight: 700, fontSize: '15px'}}>ERP personnalisé</div>
    </div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Tout système qui produit du XML, poste du JSON sur l'API ou écrit un CSV dans un répertoire surveillé devient une source par l'ajout d'un template.</div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>API HTTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>Directory</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>FTP/SFTP</span>
      <span style={{padding: '2px 8px', borderRadius: '4px', background: 'rgba(192,132,252,0.14)', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>UBL passthrough</span>
    </div>
  </div>
</div>

---

## Six piliers, un produit

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '24px 0'}}>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(74,158,255,0.06), rgba(74,158,255,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>📥</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#4a9eff'}}>Extraire depuis n'importe où</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Connexion à n'importe quel ERP via surveillance de répertoire, polling FTP/SFTP, BIP Print Queue JDE ou point d'entrée HTTP JSON. Ordonnancement de lots, lancement à la demande ou flux facture par facture.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/extract">Module Extract</Link> · <Link to="/nomaubl/sync/fetch-input">Fetch Input</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(50,215,75,0.06), rgba(50,215,75,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>📄</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#4ade80'}}>Générer un UBL conforme</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Les templates projettent les champs source vers UBL 2.1, alimentent l'extension CTC française, appliquent les schemeID, le routage BAR, les codes de processus métier, les remises et le Cadre de facturation. Le mode AUTO résout la voie correcte par type de document.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/processing/document">Traitement de document</Link> · <Link to="/nomaubl/ubl-tools/ubl-defaults/overview">UBL Defaults</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(192,132,252,0.06), rgba(192,132,252,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>✅</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#c084fc'}}>Valider en amont, avant la PA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>XSD + Schematron + le profil CTC français s'exécutent à l'intérieur de NomaUBL. Chaque erreur, avertissement et indication de reprise s'affiche en ligne — la PA ne voit jamais un document sciemment cassé, et les cycles de rejet cessent de coûter des journées.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/ubl-tools/validate">Validate</Link> · <Link to="/nomaubl/processing/document">Traitement de document</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(255,159,10,0.06), rgba(255,159,10,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>📤</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#fb923c'}}>Déposer & suivre sur toute PA</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Le backend PA est de la configuration. Dépôt, récupération du cycle de vie, persistance des litiges, refus et accusés de paiement. Changer de Plateforme Agréée sans reconstruire le reste de la chaîne.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/sync/import">Import</Link> · <Link to="/nomaubl/sync/retrieve-statuses">Retrieve Statuses</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(255,69,58,0.06), rgba(255,69,58,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>🛠</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#f87171'}}>Opérer le cycle de vie</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Redéposer, mettre à jour un statut, envoyer le PDF par e-mail, marquer paiement reçu, émettre un avoir, annuler en compta — la bonne action est proposée à la bonne étape. Chaque événement est journalisé, append-only, prêt pour l'audit.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/application/invoices">E-Invoicing</Link> · <Link to="/nomaubl/application/integration-errors">Integration Errors</Link></div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(160deg, rgba(0,122,255,0.06), rgba(0,122,255,0.01))'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>⚙️</div>
    <div style={{fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#60a5fa'}}>Gouverner en libre-service</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.6', marginBottom: '10px'}}>Listes de référence, types de document, fournisseurs, routage BAR, codes de paiement, catégories TVA, mappings de devise — tout se maintient depuis l'interface. La finance porte les règles, l'IT porte la plateforme.</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>📌 <Link to="/nomaubl/configuration">Configuration</Link> · <Link to="/nomaubl/management/file-versions">File Versions</Link></div>
  </div>

</div>

---

## NomaUBL face aux alternatives

Une Plateforme Agréée est imposée par la réglementation — mais elle ne résout pas le problème dans son ensemble. Le tableau ci-dessous montre pourquoi NomaUBL est le complément naturel.

<div style={{margin: '24px 0', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden'}}>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', padding: '14px 18px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
    <div>Capacité</div>
    <div style={{textAlign: 'center', opacity: 0.75}}>PA seule</div>
    <div style={{textAlign: 'center', opacity: 0.75}}>Développement maison</div>
    <div style={{textAlign: 'center', color: '#4a9eff'}}>NomaUBL</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Génération UBL depuis tout ERP</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>1 ERP à la fois</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ JDE · SAP · NS · custom</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Validation amont (XSD + Schematron + CTC-FR)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Règles à écrire</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Intégrée, mise à jour</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Suivi du cycle de vie + actions de reprise</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Lecture seule</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>À développer</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ UI d'opérations</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Routage BAR &amp; tracks d'e-reporting</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Par PA</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>À développer</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Configuration</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Opérations en libre-service (fournisseurs, BAR, defaults)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>—</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Côté IT</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Côté finance</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Portabilité PA (changement sans refonte)</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Verrouillé</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>Réécriture</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Échange de connecteur</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '13px', alignItems: 'center'}}>
    <div>Délai jusqu'à la première facture conforme</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>+ pipeline</div>
    <div style={{textAlign: 'center', color: '#f87171', fontWeight: 700}}>6–12 mois</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Jours–semaines</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 18px', fontSize: '13px', alignItems: 'center'}}>
    <div>Piste d'audit (cycle de vie append-only)</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>Côté PA</div>
    <div style={{textAlign: 'center', color: '#fb923c', fontWeight: 700}}>À développer</div>
    <div style={{textAlign: 'center', color: '#4ade80', fontWeight: 700}}>✓ Locale + signée</div>
  </div>
</div>

L'association pertinente est **NomaUBL + Plateforme Agréée** — pas l'un ou l'autre. NomaUBL prend en charge tout l'amont et le périmètre opérationnel autour de la PA ; la PA gère la voie de transmission régulée. Ensemble, ils couvrent la réglementation de bout en bout.

---

## Une journée type

Différentes équipes utilisent la plateforme pour des raisons différentes. NomaUBL est conçu pour donner à chaque profil un périmètre clair et resserré.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '16px', margin: '24px 0'}}>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(74,158,255,0.35)', background: 'linear-gradient(165deg, rgba(74,158,255,0.08), rgba(74,158,255,0.01))', boxShadow: '0 4px 16px rgba(74,158,255,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(74,158,255,0.2)'}}>
      <div style={{fontSize: '28px', lineHeight: 1}}>💼</div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#4a9eff'}}>Finance & Comptabilité</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Opérations facture au quotidien</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>📨 Émettre les factures</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Edit UBL · Resend · E-mail PDF</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>⚖️ Traiter les litiges</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>207 → avoir · 213 → réémission</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>💰 Marquer les paiements</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Statut 205 · connecteurs API</div>
      </div>
    </div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(50,215,75,0.35)', background: 'linear-gradient(165deg, rgba(50,215,75,0.08), rgba(50,215,75,0.01))', boxShadow: '0 4px 16px rgba(50,215,75,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(50,215,75,0.2)'}}>
      <div style={{fontSize: '28px', lineHeight: 1}}>🛠</div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#4ade80'}}>IT & Intégration</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Traitements par lots fiables</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>⚡ Lancer les passes ordonnancées</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>fetch-all · cron · ordonnanceur -serve</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>🚨 Surveiller les erreurs</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Integration Errors · logs</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>📦 Promouvoir les configurations</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>File Versions · package · import</div>
      </div>
    </div>
  </div>

  <div style={{padding: '22px', borderRadius: '14px', border: '1px solid rgba(192,132,252,0.35)', background: 'linear-gradient(165deg, rgba(192,132,252,0.08), rgba(192,132,252,0.01))', boxShadow: '0 4px 16px rgba(192,132,252,0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(192,132,252,0.2)'}}>
      <div style={{fontSize: '28px', lineHeight: 1}}>🏛</div>
      <div>
        <div style={{fontSize: '15px', fontWeight: 700, color: '#c084fc'}}>Conformité & Audit</div>
        <div style={{fontSize: '11px', opacity: 0.65, marginTop: '2px'}}>Piste d'audit append-only</div>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>🔍 Inspecter le cycle de vie</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Onglet History · append-only</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>🧭 Tracer toute facture</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>UBL Reference · codes de statut</div>
      </div>
      <div style={{padding: '11px 13px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
        <div style={{fontSize: '12px', fontWeight: 600, marginBottom: '3px'}}>📚 Gouverner les référentiels</div>
        <div style={{fontSize: '11px', opacity: 0.7, fontStyle: 'italic'}}>Statuts · motifs · règles BAR</div>
      </div>
    </div>
  </div>

</div>

| Profil | Surface principale | Bénéfice |
|---|---|---|
| **Finance & Comptabilité** | Onglet *Application* — Dashboard, E-Invoicing, E-Reporting | Opérations facture au quotidien sans sortir de NomaUBL : émettre, instruire, reprendre, relancer. |
| **IT & Intégration** | Onglets *Sync*, *Processing*, *Management* — et la CLI | Passes par lots fiables, erreurs observables, configurations déployables. |
| **Conformité & Audit** | Onglet *References* + *History* sur chaque facture | Une trace d'audit complète et signée de chaque état et décision — locale, requêtable, append-only. |

---

## Pourquoi les équipes choisissent NomaUBL

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(74,158,255,0.1), rgba(74,158,255,0.02))', border: '1px solid rgba(74,158,255,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Mise en conformité plus rapide</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Des jours, pas des trimestres</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>Templates, valeurs par défaut, routage BAR et règles de validation livrés clés en main. Un nouvel ERP est à un template près — pas à six mois de projet.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(50,215,75,0.1), rgba(50,215,75,0.02))', border: '1px solid rgba(50,215,75,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4ade80', fontWeight: 700, marginBottom: '8px'}}>Moins de rejets</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Erreurs détectées avant la PA</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>La validation amont supprime l'aller-retour : une facture passe sans accroc ou échoue tôt, de manière visible et corrigible, avant qu'aucun système externe ne la voie.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(192,132,252,0.1), rgba(192,132,252,0.02))', border: '1px solid rgba(192,132,252,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c084fc', fontWeight: 700, marginBottom: '8px'}}>TCO réduit</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Une plateforme, toutes les entités</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>Une seule licence couvre JDE + SAP + NetSuite + custom — pas de module par ERP, pas de compétences en double, pas de pipelines parallèles à maintenir.</div>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', background: 'linear-gradient(160deg, rgba(255,159,10,0.1), rgba(255,159,10,0.02))', border: '1px solid rgba(255,159,10,0.3)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#fb923c', fontWeight: 700, marginBottom: '8px'}}>Sans verrou</div>
    <div style={{fontSize: '14px', fontWeight: 700, marginBottom: '6px'}}>Votre PA, votre choix</div>
    <div style={{fontSize: '12px', opacity: 0.82, lineHeight: '1.55'}}>Le connecteur Plateforme Agréée est de la configuration, pas du code. Renégociation, changement, multi-source — votre chaîne e-invoicing évolue avec vous.</div>
  </div>
</div>

---

## Démarrer en quatre étapes

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>1</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Installer</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Provisionner un environnement</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Lancer <code>java -jar nomaubl.jar -install /opt/nomaubl/demo</code> pour créer l'arborescence, le framework XSL embarqué et la configuration de départ.</div>
    <Link to="/nomaubl/management/command-line" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Ligne de commande</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>2</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Configurer</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Connecter vos données</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Éditer <code>config.json</code> pour pointer vers la base, la source ERP, la Plateforme Agréée et le serveur SMTP. Initialiser la base depuis l'interface.</div>
    <Link to="/nomaubl/configuration" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Configuration</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>3</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Cartographier</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Defaults &amp; routage</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Fournisseurs, schemeID, routage BAR, codes de paiement, catégories TVA, types de document — une fois configurés, chaque UBL est généré correctement sans correction par facture.</div>
    <Link to="/nomaubl/ubl-tools/ubl-defaults/overview" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ UBL Defaults</Link>
  </div>
  <div style={{padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative'}}>
    <div style={{position: 'absolute', top: '14px', right: '14px', fontSize: '32px', fontWeight: 800, opacity: 0.12}}>4</div>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4a9eff', fontWeight: 700, marginBottom: '8px'}}>Lancer</div>
    <div style={{fontSize: '14px', fontWeight: 600, marginBottom: '6px'}}>Traiter &amp; suivre</div>
    <div style={{fontSize: '12px', opacity: 0.78, lineHeight: '1.55', marginBottom: '10px'}}>Démarrer <code>nomaubl.sh start &lt;env&gt;</code>, déposer une facture témoin dans <code>input/</code>, observer son passage par extract → UBL → validate → submit → track en temps réel.</div>
    <Link to="/nomaubl/application/dashboard" style={{fontSize: '11px', color: '#4a9eff', fontWeight: 600, textDecoration: 'none'}}>→ Application</Link>
  </div>
</div>

---

## La suite

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '24px 0'}}>
  <Link to="/nomaubl/application" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>📊 Application →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Dashboard, E-Invoicing, E-Reporting, E-Directory, Integration Errors.</div>
  </Link>
  <Link to="/nomaubl/processing/document" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>🔄 Processing →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Traitement de document, Extract and Process, Process API.</div>
  </Link>
  <Link to="/nomaubl/ubl-tools/validate" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>✅ UBL Tools →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Validate, XML Viewer, XSL Editor et l'ensemble UBL Defaults.</div>
  </Link>
  <Link to="/nomaubl/configuration" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>⚙️ Configuration →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Documents, paramètres système, connecteurs, sécurité et listes de référence.</div>
  </Link>
  <Link to="/nomaubl/management/command-line" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>💻 Ligne de commande →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Contrôle de service, traitements par lots et référence complète des modes du JAR.</div>
  </Link>
  <Link to="/nomaubl/references/status-reference" style={{display: 'block', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', textDecoration: 'none', color: 'inherit'}}>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '4px'}}>📚 References →</div>
    <div style={{fontSize: '11px', opacity: 0.7}}>Codes de statut, codes de motif, sémantique UBL, API HTTP.</div>
  </Link>
</div>
