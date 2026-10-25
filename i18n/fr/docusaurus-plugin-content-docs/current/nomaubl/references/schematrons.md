---
title: Schematrons
description: "La page Schematrons de NomaUBL : consulter les règles de chaque Schematron exécuté par le validateur — EN 16931, CIUS-FR, CTC FR étendu, Chorus Pro, NomaUBL, e-reporting, et les Schematrons client désignés par les modèles de document — une ligne par règle avec sa sévérité, sa description et son contexte, ainsi que le test et le message de chaque règle."
keywords: [NomaUBL, Schematron, règles de validation, EN 16931, CIUS-FR, CTC étendu, Chorus Pro, e-reporting, Schematron client, assert, report, test XPath, validation, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Schematrons

La page **Schematrons** liste les règles de chaque Schematron exécuté par le validateur : ceux **livrés avec NomaUBL** et les **Schematrons client** désignés par un modèle de document. Chaque règle occupe une ligne — identifiant, sévérité, description et élément concerné — et une ligne ouvre le test évalué par la règle et le message qu'elle renvoie. La page répond à la question qui suit une erreur de validation : *que contrôle exactement cette règle ?*

Accès : **Schematrons**, dans le groupe Documentation, après les [Règles de gestion](./business-rules.mdx).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="374" rx="14" fill="url(#sch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Schematrons</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les règles de chaque Schematron exécuté par le validateur — livré avec NomaUBL ou désigné par un modèle.</text>
  <rect x="240" y="82" width="260" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CIUS-FR — 312 règles ▾</text>
  <text x="512" y="97" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">CIUS-FR.xsl · version 1.4.0.04</text>
  <rect x="240" y="118" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLE</text>
  <text x="360" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉVÉRITÉ</text>
  <text x="440" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="770" y="135.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONTEXTE</text>
  <rect x="240" y="150" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-01</text>
  <rect x="360" y="155.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="166.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Le numéro de facture ne doit pas dépasser 35 caractères</text>
  <text x="770" y="166.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cbc:ID</text>
  <rect x="240" y="180" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-05</text>
  <rect x="360" y="185.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="196.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Les mentions légales obligatoires doivent être présentes</text>
  <text x="770" y="196.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ubl:Invoice</text>
  <rect x="240" y="210" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <rect x="360" y="215.0" width="41" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="380.5" y="226.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="440" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Le SIREN de l'acheteur doit être présent</text>
  <text x="770" y="226.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cac:AccountingCustomerParty</text>
  <rect x="240" y="240" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-CTC-03</text>
  <rect x="360" y="245.0" width="51" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="385.5" y="256.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">warning</text>
  <text x="440" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Le cadre de facturation devrait être indiqué</text>
  <text x="770" y="256.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">cbc:ProfileID</text>
  <rect x="600" y="278" width="360" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="614" y="296" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <rect x="680" y="286" width="40" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="700.0" y="296.7" fill="#f87171" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">fatal</text>
  <text x="614" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOIT ÊTRE VRAI</text>
  <text x="614" y="330" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">exists(cac:Party/cac:PartyLegalEntity/cbc:CompanyID)</text>
  <text x="614" y="350" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="614" y="364" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[BR-FR-12] Le SIREN de l'acheteur doit être présent</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir un Schematron</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">livrés · Schematrons client</text>
  <line x1="200" y1="93.0" x2="240" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par règle</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">assert ou report</text>
  <line x1="200" y1="207.0" x2="250" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="20" y="328" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="343" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outils de la grille</text>
  <text x="30" y="356" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche, filtres, export</text>
  <line x1="200" y1="345.0" x2="240" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichier et version</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ modèles d'un Schematron client</text>
  <line x1="1000" y1="93.0" x2="690" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sévérité</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fatal · error · warning · info</text>
  <line x1="1000" y1="177.0" x2="370" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
  <rect x="1000" y="318" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="333" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fenêtre de la ligne</text>
  <text x="1010" y="346" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">motif, contexte, test, message</text>
  <line x1="1000" y1="335.0" x2="960" y2="328" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sch-arrow)"/>
</svg>

---

## Choix du Schematron

La liste **Choisir un Schematron** présente les Schematrons en deux groupes, chacun avec son nombre de règles :

| Groupe | Schematrons |
|---|---|
| **Livrés avec NomaUBL** | EN 16931, CIUS-FR, CTC FR étendu, Chorus Pro, NomaUBL, E-reporting (flux 10). La mise à jour les renouvelle avec la version. |
| **Schematrons client** | Chaque feuille précompilée indiquée dans le champ [Custom Schematron](../management/documents.md#ubl) d'un modèle de document. |

À côté de la liste, la page indique le nom du fichier, la version et la date du Schematron et, pour un Schematron client, les modèles qui l'utilisent. Le dernier Schematron consulté est rouvert à la visite suivante.

---

## Grille des règles

Une ligne par règle (`assert` ou `report`) du Schematron, triée par identifiant, 100 lignes par page.

| Colonne | Contenu |
|---|---|
| **Règle** | Identifiant de la règle (`BR-FR-12`, `BR-CO-15`…), celui cité dans les erreurs de validation. |
| **Sévérité** | `fatal`, `error`, `warning` ou `info`, sous forme de pastille colorée. |
| **Description** | Ce qu'exige la règle, tel que rédigé dans le Schematron. |
| **Contexte** | L'élément sur lequel la règle est évaluée (XPath). |
| **Motif**, **Type**, **Test** *(masquées)* | Groupe de règles, `assert` ou `report`, et test XPath. Affichables depuis le menu des colonnes. |

La grille offre la recherche, les filtres (sévérité, motif), le choix des colonnes et l'export habituels.

### Fenêtre de la règle

Un clic sur une ligne ouvre la règle : description, **Motif**, **Contexte**, puis le test sous **Doit être vrai** pour un `assert` ou **Se déclenche si** pour un `report`, et le **Message** inscrit dans l'erreur de validation.

---

## Accès

La page suit le droit **Règles de gestion** du groupe Documentation de la page [Rôles](../configuration/security/roles.md) : un rôle qui consulte les règles de gestion consulte aussi les Schematrons.

---

## Conseils & bonnes pratiques

- **Partir de l'erreur.** Copier l'identifiant de la règle depuis les erreurs de validation de la facture et le saisir dans la recherche de la grille.
- **Lire le test, pas seulement le message.** Le message est bref ; l'expression *Doit être vrai* indique précisément l'élément et la valeur attendus.
- **Vérifier un Schematron client après modification.** La liste indique son nombre de règles et les modèles qui l'utilisent ; un Schematron illisible affiche son erreur sous la liste.
- **Garder les règles propres au client dans un Schematron client.** Les Schematrons livrés sont remplacés à chaque mise à jour ; les [jeux de règles](../ubl-tools/rule-sets.md) déterminent quels Schematrons standard s'exécutent.
