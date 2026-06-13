---
title: Types de documents
description: "Configurer les sept codes de type de document NomaUBL qui structurent la Réforme française de la facturation électronique / e-reporting : description, sélection par défaut, politique d'envoi à la PA, mode de sortie et conservation des fichiers."
keywords: [NomaUBL, types de documents, B2B, B2G, B2C, B2BINT, OUTOFSCOPE, ARCHIVEONLY, e-invoicing, e-reporting, Chorus Pro, réforme facture électronique, JD Edwards, SAP, NetSuite]
---

# Types de documents

L'éditeur **Document Types** définit les sept codes de type de document utilisés dans l'ensemble de NomaUBL pour piloter la **Réforme française de la facturation électronique / e-reporting**.

## Rôle de la page

Lors du traitement d'un spool d'entrée, NomaUBL applique par défaut les **arguments d'exécution** passés au job (`Send to PA`, `Mode`, `Keep UBL`, etc.). Cette page permet de **surcharger ces arguments par défaut en fonction du code de type de document** détecté par NomaUBL dans le spool.

Le mécanisme est utile car **un même spool peut contenir plusieurs types de documents**. Exemple typique : un spool contient une facture **B2B** et une facture **B2C**. Sans surcharge par type, les deux factures héritent des mêmes arguments d'exécution ; avec cette page, il est possible — par exemple — de forcer l'envoi de la facture B2B vers la PA tout en conservant la facture B2C en local pour l'e-reporting uniquement.

Les sept codes sont fixés par la réglementation ; il n'est pas possible d'en ajouter ni d'en renommer. Ce qui est paramétrable ici est la **politique appliquée à chaque code** quand il apparaît dans un spool.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#dt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Types de documents</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enreg.</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharges par type</text>
  <text x="240" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Quand le spool mélange plusieurs codes, chaque ligne surcharge les arguments d'exécution pour ce code.</text>

  <rect x="240" y="124" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="145" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE · ENVOI PA · MODE · GARDER UBL · GARDER PDF · DESCRIPTION</text>

  <rect x="240" y="162" width="540" height="30" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="170" width="48" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276" y="181" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2B</text>
  <text x="312" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Oui</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="181" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-invoicing standard</text>

  <rect x="240" y="196" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="204" width="48" height="16" rx="8" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="276" y="215" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2G</text>
  <text x="312" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Oui</text>
  <text x="370" y="215" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="215" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="215" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">secteur public · Chorus Pro</text>

  <rect x="240" y="230" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="238" width="60" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="282" y="249" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2BINT</text>
  <text x="324" y="249" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Non</text>
  <text x="370" y="249" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="249" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="249" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="249" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-reporting · B2B intra-UE</text>

  <rect x="240" y="264" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="272" width="48" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="276" y="283" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">B2C</text>
  <text x="312" y="283" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Non</text>
  <text x="370" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="446" y="283" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="514" y="283" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="568" y="283" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">e-reporting · B2C agrégé</text>

  <rect x="240" y="298" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="306" width="92" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="317" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">OUTOFSCOPE</text>
  <text x="356" y="317" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Non</text>
  <text x="402" y="317" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="478" y="317" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="546" y="317" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="600" y="317" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">export hors UE / flux internes</text>

  <rect x="240" y="332" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="340" width="100" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="302" y="351" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ARCHIVEONLY</text>
  <text x="362" y="351" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">— ignoré</text>
  <text x="424" y="351" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="500" y="351" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="568" y="351" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="600" y="351" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">avoir interne · BR-FR-20</text>

  <rect x="240" y="366" width="540" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="374" width="84" height="16" rx="8" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="385" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">DOCUMENT</text>
  <text x="350" y="385" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace">— ignoré</text>
  <text x="412" y="385" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AUTO</text>
  <text x="488" y="385" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="556" y="385" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">Y</text>
  <text x="600" y="385" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">document non facture</text>

  <text x="240" y="416" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">Les codes sont fixés par la réglementation ; ce qui se configure ici, c'est la politique appliquée à chacun.</text>

  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">e-invoicing</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">B2B / B2G → envoyé à la PA</text>
  <line x1="200" y1="186" x2="252" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>

  <rect x="20" y="248" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="263" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">e-reporting</text>
  <text x="30" y="276" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">B2BINT / B2C → déclaration seule</text>
  <line x1="200" y1="264" x2="252" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>

  <rect x="820" y="332" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="347" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ARCHIVEONLY · BR-FR-20</text>
  <text x="830" y="360" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avoir interne · aucune transmission</text>
  <line x1="820" y1="348" x2="780" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dt-arrow)"/>
</svg>

---

## Les sept codes de type de document

| Code | Portée réglementaire |
|---|---|
| **B2B** | Concerne l'**e-invoicing**. |
| **B2G** | Concerne l'**e-invoicing — secteur public** (Chorus Pro). |
| **B2BINT** | Concerne l'**e-reporting** des ventes B2B internationales. |
| **B2C** | Concerne l'**e-reporting — Ventes B2C**. |
| **OUTOFSCOPE** | Hors périmètre de la Réforme française de la facturation électronique. |
| **ARCHIVEONLY** | Avoir interne (annulation REJETÉE/REFUSÉE) — pas de flux 1, pas de transmission (règle réglementaire **BR-FR-20**). |
| **DOCUMENT** | Document hors facturation. |

---

## Paramètres par ligne

Chaque ligne de l'éditeur correspond à l'un des sept codes. La colonne **Code** est en lecture seule (les codes sont fixés par la réglementation) ; toutes les autres colonnes sont modifiables et constituent une **surcharge de l'argument d'exécution correspondant** pour les documents portant ce code.

| Colonne | Valeurs | Description |
|---|---|---|
| **Code** | figé | L'un des sept codes réglementaires ci-dessus. Lecture seule. Le survol du code affiche l'indication réglementaire associée. |
| **Description** | texte libre | Libellé affiché dans les modèles de documents et l'interface. Initialisé avec la description réglementaire ci-dessus. |
| **Default** | case à cocher | Quand cochée, ce code est **pré-sélectionné** dans les nouveaux modèles de documents créés. **Une seule ligne peut être marquée par défaut à la fois** — cocher une autre ligne décoche automatiquement la précédente. |
| **Send to PA** | `Y` / `N` / `F` | Surcharge par type de l'argument d'exécution *envoi vers Plateforme Agréée* : `Y` = envoi ; `N` = pas d'envoi ; `F` = **envoi forcé**, même quand l'argument d'exécution demande de l'ignorer. Valeur par défaut : `Y` pour B2B, `N` pour tous les autres codes. |
| **GS** | case à cocher | Quand cochée, exécute un post-traitement **Ghostscript** sur le PDF produit pour ce type (par ex. compression / linéarisation), indépendamment de l'argument d'exécution. Désactivé par défaut. |
| **Mode** | *(par défaut)* / `UBL` / `BURST` | Surcharge par type de l'argument d'exécution *Mode* : vide = **aucune surcharge** (le mode passé en argument est conservé) ; `UBL` = forcer une sortie UBL uniquement pour ce type ; `BURST` = forcer une sortie éclatée pour ce type. |
| **UBL** | case à cocher | Quand cochée, conserve le **fichier UBL** généré dans le répertoire de sortie *bursting* après traitement pour ce type. Valeur par défaut : `Y` (conservé). |
| **PDF** | case à cocher | Quand cochée, conserve le **fichier PDF** généré dans le répertoire de sortie *bursting* après traitement pour ce type. Valeur par défaut : `N` (non conservé). |

---

## Conseils & bonnes pratiques

- **Traiter chaque colonne hors Code/Description/Default comme une surcharge d'argument d'exécution.** Quand aucune surcharge n'est nécessaire, laisser la valeur vide ou décochée — l'argument d'exécution s'applique alors par défaut.
- **Définir un code Default aligné sur le flux dominant.** La plupart des installations placent `B2B` par défaut — la pré-sélection sur chaque nouveau modèle de document évite des saisies répétées.
- **Utiliser `F` (Force send) avec parcimonie.** Cette valeur surcharge l'argument d'exécution *Send to PA* et peut provoquer la transmission de factures dans des environnements supposés rester hors-ligne.
- **`ARCHIVEONLY` ne doit jamais atteindre la PA.** Ce code couvre les avoirs internes liés aux annulations (règle BR-FR-20) ; conserver Send to PA à `N`.
- **`OUTOFSCOPE` désigne les documents hors réforme.** Les conserver dans NomaUBL pour la traçabilité, mais ne pas les transmettre à une PA.
- **Conserver Keep PDF désactivé par défaut**, sauf si un outillage aval consomme le PDF éclaté — son activation alourdit le répertoire de bursting et ralentit les opérations de purge.
- **N'activer Ghostscript qu'en cas de besoin.** Cette option ajoute une étape de post-traitement sur chaque document du type concerné, ce qui peut représenter une charge significative sur les spools volumineux.
