---
title: Récupération des statuts
description: "Récupérer les événements de cycle de vie depuis la Plateforme Agréée — codes XP Z12-012 200, 201, 206, 207, 210, 213… — et les appliquer à la table de cycle de vie locale et à l'en-tête de facture. Récupération incrémentale par horodatage repère."
keywords: [NomaUBL, sync, récupération des statuts, cycle de vie, XP Z12-012, événements de statut, 200, 201, 206, 207, 210, 213, F564231, F564235, horodatage repère, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Récupération des statuts

L'écran **Retrieve Statuses** récupère les **événements de cycle de vie** émis par la Plateforme Agréée — les codes définis par la réforme française de la facturation électronique (XP Z12-012) : `200` Déposée, `201` Mise à disposition, `206` Approuvée partiellement, `207` En litige, `210` Refusée, `213` Rejetée, et le reste du cycle. Chaque événement est ajouté à la table de cycle de vie locale et le statut courant de la facture est mis à jour.

Cet écran est **distinct de *Sync → Import*** :

- *Sync → Import* gère la **confirmation d'import asynchrone** consécutive à un dépôt réussi (`9906` → `10` / `9907`).
- *Retrieve Statuses* gère les **codes de cycle de vie** émis par la PA *après* l'import (`200`, `201`, `206`, `207`, `210`, `213`, …).

Les deux peuvent s'exécuter sur le même ordonnanceur avec des intervalles différents — voir *Conseils* ci-dessous.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — car la production des événements de cycle de vie est du ressort de la PA, indépendamment du système amont.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rsui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rsui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rsui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rsui-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="380" rx="14" fill="url(#rsui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Récupérer les statuts</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Récupère les événements de cycle de vie depuis la Plateforme Agréée et met à jour la base de données.</text>
  <rect x="240.0" y="82" width="354.0" height="50" rx="9" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="252.0" y="94.0" width="26" height="26" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="265.0" y="110.5" fill="#4a9eff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="288.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Récupérer les statuts</text>
  <text x="288.0" y="119.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Demander maintenant les nouveaux statuts à la plateforme</text>
  <rect x="606.0" y="82" width="354.0" height="50" rx="9" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="618.0" y="94.0" width="26" height="26" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="631.0" y="110.5" fill="#fb923c" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="654.0" y="105.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles</text>
  <text x="654.0" y="119.0" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Événements absents de l'historique, événements dans le désord…</text>
  <rect x="240" y="146" width="720" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="168" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RÉCUPÉRATION DES STATUTS</text>
  <text x="256" y="186" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Appelle l'endpoint des statuts PA depuis la dernière date de récupération ; met à jour le cycle de vie et le statut courant.</text>
  <rect x="256" y="200" width="139" height="22" rx="5" fill="url(#rsui-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="325.5" y="214.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Récupérer les statuts</text>
  <text x="409" y="215" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">✓ Récupération des statuts terminée.</text>
  <rect x="240" y="250" width="720" height="128" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="272" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RÉSULTATS</text>
  <rect x="256" y="282" width="688" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉVÉRITÉ</text>
  <text x="356" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="426" y="297.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <rect x="256" y="310" width="688" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="266" y="314.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="291.5" y="325.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCESS</text>
  <text x="356" y="325.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PA</text>
  <text x="426" y="325.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">INV-2026-0142 · 201 Mise à disposition → cycle de vie + en-tête</text>
  <rect x="256" y="338" width="688" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="266" y="342.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="284.5" y="353.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INFO</text>
  <text x="356" y="353.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">PA</text>
  <text x="426" y="353.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Date de dernière récupération : 26/11/2026 18:04</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux cartes de mode</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">récupérer ou contrôler</text>
  <line x1="200" y1="107.0" x2="240" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul bouton</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">depuis la dernière récupération</text>
  <line x1="200" y1="217.0" x2="256" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Contrôles</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statuts manquants · ordre</text>
  <line x1="1000" y1="107.0" x2="950" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par événement appliqué</text>
  <line x1="1000" y1="317.0" x2="944" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rsui-arrow)"/>
</svg>

---

## Vue d'ensemble du pipeline

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="rs-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="rs-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="rs-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🖱 Retrieve Statuses</text>
  <text x="160" y="62" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">clic utilisateur</text>
  <rect x="40" y="110" width="240" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="160" y="134" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Lecture du repère</text>
  <text x="160" y="152" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <line x1="160" y1="80" x2="160" y2="110" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="350" y="100" width="320" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="510" y="126" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 Appel endpoint PA</text>
  <text x="510" y="146" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">since = horodatage repère</text>
  <text x="510" y="164" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">codes = statuts configurés</text>
  <line x1="280" y1="140" x2="350" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="730" y="100" width="220" height="80" rx="10" fill="url(#rs-g-blue-strong)" stroke="#4a9eff" strokeWidth="2" strokeDasharray="6 3"/>
  <text x="840" y="128" fill="#4a9eff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">🔁 Pour chaque événement</text>
  <text x="840" y="148" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">boucle</text>
  <line x1="670" y1="140" x2="730" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <rect x="40" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="230" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📜 Ajout au cycle de vie</text>
  <text x="230" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564235 — événement append-only</text>
  <text x="230" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">code · message · motif · action</text>
  <rect x="500" y="240" width="380" height="80" rx="10" fill="url(#rs-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="690" y="266" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 MAJ en-tête facture</text>
  <text x="690" y="286" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564231 — statut courant</text>
  <text x="690" y="304" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">= code de l'événement</text>
  <path d="M 840 180 L 840 220 L 230 220 L 230 240" stroke="#4a9eff" strokeWidth="1.4" fill="none" markerEnd="url(#rs-arrow)"/>
  <text x="510" y="213" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">par événement</text>
  <line x1="420" y1="280" x2="500" y2="280" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
  <path d="M 690 320 L 690 350 L 920 350 L 920 180" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="930" y="270" fontSize="9" fill="#94a3b8" textAnchor="start" fontFamily="ui-monospace, monospace" fontWeight="700">événement suivant</text>
  <rect x="350" y="380" width="220" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="460" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 Avance du repère</text>
  <text x="460" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">last retrieval date</text>
  <path d="M 950 140 L 980 140 L 980 360 L 460 360 L 460 380" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3" fill="none" markerEnd="url(#rs-arrow-slate)"/>
  <text x="720" y="352" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">événements traités</text>
  <rect x="640" y="380" width="200" height="60" rx="10" fill="url(#rs-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="740" y="404" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Logs agrégés</text>
  <text x="740" y="422" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">synthèse UI</text>
  <line x1="570" y1="410" x2="640" y2="410" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#rs-arrow)"/>
</svg>

Chaque exécution ne lit que les événements postérieurs à l'horodatage repère et l'avance après un passage réussi — l'exécution suivante reprend exactement là où la précédente s'est arrêtée.

---

## Déroulement

Chaque clic enchaîne quatre étapes :

1. **Lecture de l'horodatage repère.** La dernière date de récupération est conservée dans la configuration du template *e-invoicing*. Elle alimente le paramètre `since` de l'appel PA.
2. **Appel à l'endpoint d'événements PA.** La liste des codes de statut à interroger est configurée dans le même template (les *configured status names*). Par défaut, elle reprend l'ensemble des codes XP Z12-012 ; seuls les codes présents dans la liste sont retournés.
3. **Application de chaque événement.** Pour chaque événement renvoyé par la PA :
   - Une nouvelle ligne est ajoutée à la **table de cycle de vie** (`F564235`) — la trace complète de chaque statut traversé par la facture.
   - L'**en-tête de facture** (`F564231`) est mis à jour pour que le *statut courant* affiché dans la liste des factures corresponde au dernier événement reçu.
4. **Avance de l'horodatage repère.** La valeur `lastRetrievalDate` du template est mise à jour avec l'horodatage du dernier événement reçu. L'exécution suivante part de cet horodatage.

La table de cycle de vie est **en mode ajout seul** : chaque événement ajoute une ligne, aucune ligne n'est jamais modifiée ni supprimée. Relancer la récupération ne peut pas produire de doublon, l'horodatage repère n'avance que dans un seul sens.

---

## Statuts récupérés

Le cycle de vie couvre les codes **post-soumission** définis par XP Z12-012 — `200` à `228`, ainsi que `500` / `501`. La liste complète figure dans la [Référence des statuts](../references/status-reference.mdx) ; l'ensemble effectivement récupéré à chaque exécution est gouverné par la propriété *configured status names* du template *e-invoicing*.

Sous-ensembles courants :

- **Tous les codes** *(défaut)* — abonnement à toute la liste de référence. Adapté à tout déploiement qui demande une traçabilité complète.
- **Codes obligatoires uniquement** — récupération limitée aux codes obligatoires PPF (`200`, `201`, `213`, …). Réduit le volume sur les installations à très fort débit où les statuts intermédiaires ne sont pas exploités en aval.

Les codes `9906` / `9907` ne **font pas** partie de cette récupération — ce sont des statuts locaux NomaUBL liés à la confirmation d'import asynchrone, traités par *Sync → Import*.

---

## Exécution

La page s'ouvre sur deux cartes : **Récupérer les statuts** (*Demander maintenant les nouveaux statuts à la plateforme*), sélectionnée par défaut, et **Contrôles** (*Événements absents de l'historique, événements dans le désordre*), qui regroupe les [contrôles d'intégrité](#integrity-checks). Les cartes et le bouton d'exécution ne s'affichent que pour les rôles qui disposent de l'action **Lancer les traitements** ; les autres utilisateurs ne voient que le texte d'aide.

La carte **Récupérer les statuts** présente une seule section et un seul bouton.

| Élément | Description |
|---|---|
| **Récupérer les statuts** | Déclenche la récupération. Désactivé pendant l'exécution. |
| **Ligne de statut** | Message en ligne sous le bouton — vert en cas de succès, rouge en cas d'échec. |

La page n'a aucun paramètre : tous les événements postérieurs à l'horodatage repère, pour chaque code de la liste configurée, sont récupérés en un seul appel. Aucune sélection par facture.

---

## Résultats

La section **Results** affiche la table de logs structurée — une ligne par événement appliqué, plus les événements de niveau pipeline. Les colonnes correspondent aux autres tables de logs NomaUBL (`Severity / Module / Submodule / Message`).

Contenu typique d'une exécution réussie :

- Une ligne `INFO` indiquant le nombre d'événements renvoyés par la PA.
- Une ligne `INFO` ou `SUCCESS` par événement appliqué — clé de facture + nouveau code de statut.
- Une ligne `INFO` finale signalant le nouvel horodatage repère.

Quand un appel à la PA échoue pour des raisons de transport (réseau, expiration, identifiants), une ligne `ERROR` est journalisée et l'horodatage repère reste inchangé — la prochaine exécution repart du même `since`.

---

## Contrôles d'intégrité \{#integrity-checks\}
En plus de la récupération incrémentale, la carte **Contrôles** propose deux contrôles à la demande qui réconcilient le cycle de vie enregistré avec la plateforme et avec lui-même. Les deux s'exécutent en **arrière-plan** et sont réexécutables sans risque. Pour les exécuter chaque jour sans opérateur, planifiez-les depuis la page [Contrôles du cycle de vie](scheduled-jobs/lifecycle-checks.md) (ou les modes CLI équivalents).

### Statuts manquants

Choisissez une période — **du** … **au** … (fin vide = maintenant) — et, au besoin, **une société** : le contrôle compare **tous les événements de la plateforme sur cette fenêtre** avec le cycle de vie déjà enregistré. Une exécution limitée à une société n'interroge que son connecteur de statuts et ne recherche que ses factures : un rattrapage par société ne ramène plus les événements de toutes les sociétés. La date de fin parvient au connecteur via les variables `{{toDate}}` / `{{toDateRaw}}` (Esker `updatedBefore`) ; une date simple couvre la journée entière. Ce qui manque s'affiche dans un **tableau à sélection** — appliquez tout ou seulement les lignes retenues, avec déclenchement optionnel des [règles de notification](../management/notification-rules.md) (désactivé par défaut). Les événements non applicables sont signalés **à part**, pour ne rien changer en silence : un statut interne obsolète (étape plateforme déjà dépassée), une facture inconnue, ou un code sans mappage.

Un événement récupéré s'insère à sa **position chronologique** — d'après son horodatage plateforme — au lieu d'être ajouté en fin de liste, et le statut courant de la facture ne bouge que si l'événement récupéré est réellement le plus récent. Compléter un statut manquant ancien ne peut donc pas ramener une facture à un état passé. La même insertion chronologique s'applique à la récupération régulière des statuts.

Pendant le contrôle, sa **progression s'affiche en direct** sous la section : pages récupérées auprès de la plateforme, événements comparés par tranche de mille avec les compteurs en cours, puis une synthèse finale. Les événements hors de la fenêtre demandée sont écartés et leur nombre est journalisé (un connecteur qui ne limite que la date de début renvoie tout jusqu'à maintenant), les événements reçus deux fois ne sont comptés qu'une fois, et chaque facture n'est recherchée qu'une seule fois. La liste des événements manquants n'est pas plafonnée : **Appliquer** les complète tous en une passe ; seules les lignes informatives *introuvables* et *non mappées* cessent d'être listées au-delà de deux mille, avec une ligne de journal qui le signale.

**Factures renvoyées.** Après un rejet et un renvoi, les statuts du nouveau cycle (déposée, reçue, transmise…) sont enregistrés comme les premiers : un code ne compte comme déjà enregistré que depuis le dernier événement d'envoi, de mise en attente ou de retraitement de la facture, tandis que le même événement plateforme — même code, même horodatage — reste reconnu d'un cycle à l'autre. La récupération régulière des statuts suit la même règle.

### Ordre du cycle de vie

Le second contrôle balaie la base à la recherche de lignes **mal ordonnées** — une étape interne de plateforme enregistrée après un statut standard, et des statuts standard enregistrés dans le mauvais ordre (par ex. `202` *Reçue* avant `200` *Déposée*, l'ordre numérique des codes standard faisant référence) — plus les **codes invalides** (texte brut de plateforme stocké par erreur de mappage). La réparation **réordonne** les événements (rien n'est supprimé ; les statuts internes gardent leur position) et réaligne le statut courant de la facture, avec un aperçu avant/après et une sélection par facture.

Deux cas suivent leur propre règle :

- **Factures réémises.** Une facture renvoyée après une correction (*Corriger destinataire*, fenêtre de modification, retraitement) porte plusieurs cycles PA. Chaque cycle — ouvert par un événement d'envoi, de mise en attente ou de retraitement — est ordonné séparément ; un événement appartient au cycle dans lequel tombe son horodatage.
- **En litige (`207`) et suspendue (`208`).** Ces statuts intermédiaires peuvent être suivis d'un code inférieur, comme `205` *Approuvée* ou `210` *Refusée* : ils gardent leur position chronologique dans leur cycle et ne comptent jamais comme une inversion.

Les historiques mal ordonnés par une règle antérieure sont détectés et remis en ordre à l'exécution suivante.

Le contrôle signale aussi une **facture dont le statut diffère du dernier état réel de son historique**, affichée sous la forme *actuel → attendu*, et la réaligne à l'application. Le *dernier état réel* ignore le marqueur de retraitement (`9912`) et le marqueur de courrier transmis (`9908`), dans n'importe quel ordre — un `200` `NON_TRANSMISE` déposé reste donc tel quel. La même règle s'applique à tous les réalignements d'en-tête : complément d'intégrité, récupération des statuts et suppression d'un événement d'historique. Le marqueur de courrier transmis compte comme un événement applicatif : il n'est jamais signalé comme mal ordonné. Un événement de génération placé juste sous un marqueur de retraitement — la trace laissée par un ancien retraitement — est ignoré comme le marqueur, de même qu'une ligne d'historique sans code.

**Contrôler l'ordre** et **Nettoyer N sélectionné(s)** s'exécutent **en arrière-plan** : la page affiche le journal de l'exécution au fil de l'eau, puis les résultats. La recherche d'écarts de statut lit l'historique une seule fois, en un passage, journalise sa progression toutes les 50 000 lignes, le résultat par paire *actuel → attendu* et une synthèse finale — une base volumineuse ne se termine plus par une erreur de proxy.

---

## Conseils & bonnes pratiques

- **Planifier la récupération.** L'*ordonnanceur en arrière-plan* de NomaUBL peut exécuter cette page périodiquement — voir la propriété `fetchStatusInterval` du template *e-invoicing* (valeur en minutes ; `0` désactive l'ordonnanceur). Toutes les 15 minutes à 1 heure est typique.
- **Distincte de *Sync → Import*.** *Import* gère la confirmation asynchrone post-soumission (`9906` → `10` / `9907`) ; *Retrieve Statuses* gère les codes de cycle de vie émis par la PA ensuite. Les deux peuvent s'exécuter sur le même ordonnanceur avec des intervalles différents.
- **L'horodatage repère n'avance que dans un sens.** Relancer la page n'a aucun effet sur les événements déjà appliqués. Pour rejouer une fenêtre (par ex. après restauration d'une sauvegarde de base ancienne), abaisser manuellement `lastRetrievalDate` dans le template *e-invoicing* — l'exécution suivante récupérera tous les événements depuis cette date.
- **Restreindre les codes configurés en cas de volume.** La liste par défaut couvre tous les codes de la réforme ; les installations à fort débit qui n'exploitent que les codes obligatoires PPF peuvent réduire la liste pour alléger la charge côté PA et côté local.
- **Le cycle de vie est la trace d'audit.** La table de cycle de vie (`F564235`) est en mode ajout seul et représente l'historique complet ; l'en-tête de facture (`F564231`) ne contient que le statut le plus récent. Pour instruire un litige ou retrouver une mise à jour PA manquante, c'est dans la table de cycle de vie qu'il faut chercher.
