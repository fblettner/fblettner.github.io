---
title: Rapport d'implémentation
description: "Produire la documentation technique et fonctionnelle d'une instance NomaUBL à partir de sa configuration et de sa base — contexte, architecture, règles de gestion, documents, transformation UBL et correspondances, réglages de plateforme, exploitation, sécurité et référentiels — en PDF ou en Markdown, en français ou en anglais, secrets masqués."
keywords: [NomaUBL, rapport d'implémentation, documentation, documentation technique, documentation fonctionnelle, PDF, Markdown, configuration, correspondance UBL, BT, pré-transformation, XSL, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport d'implémentation

L'onglet **Rapport d'implémentation** de la page [Rapports](./reports.md) rédige la documentation de l'instance sur laquelle on est connecté : ce qui est configuré, comment chaque document devient un UBL, quelles règles s'appliquent, qui peut faire quoi. Tout est lu dans les fichiers de configuration et dans la base au moment de la génération : le rapport décrit donc toujours l'instance telle qu'elle fonctionne au moment de la génération, quel que soit le système source (JD Edwards, SAP, NetSuite ou ERP personnalisé).

Usages courants : le dossier de passation d'un projet, la description demandée par un auditeur ou un conseil fiscal, l'état des lieux avant une mise à jour, la référence qu'une équipe de support garde à côté de l'instance de production.

Accès : **Rapports → Rapport d'implémentation**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 411" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ir-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="367" rx="14" fill="url(#ir-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="128" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Statistiques statuts</text>
  <rect x="374" y="32" width="69" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="408.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégrité</text>
  <rect x="449" y="32" width="69" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="483.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêteur</text>
  <rect x="524" y="32" width="101" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="574.5" y="46.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <rect x="631" y="32" width="149" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="705.5" y="46.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Description technique et fonctionnelle de l'instance, produite depuis sa configuration et sa base. Secrets masqués.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <rect x="410" y="103" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Français ▾</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé de date (garde)</text>
  <rect x="410" y="135" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">par défaut : aujourd'hui</text>
  <rect x="410" y="172" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="181" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Afficher les clés techniques à côté des libellés</text>
  <text x="240" y="211" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="410" y="202" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,207.5 L414.8,209.8 L418.8,205" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="211" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Contexte</text>
  <rect x="670" y="202" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,207.5 L674.8,209.8 L678.8,205" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="211" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Architecture</text>
  <rect x="410" y="223" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,228.5 L414.8,230.8 L418.8,226" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Fonctionnement et règles de gestion</text>
  <rect x="670" y="223" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,228.5 L674.8,230.8 L678.8,226" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Documents</text>
  <rect x="410" y="244" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,249.5 L414.8,251.8 L418.8,247" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Transformation UBL et règles</text>
  <rect x="670" y="244" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,249.5 L674.8,251.8 L678.8,247" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Réglages de plateforme</text>
  <rect x="410" y="265" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,270.5 L414.8,272.8 L418.8,268" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="274" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Exploitation</text>
  <rect x="670" y="265" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M672.5,270.5 L674.8,272.8 L678.8,268" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="687" y="274" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Sécurité</text>
  <rect x="410" y="286" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,291.5 L414.8,293.8 L418.8,289" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="295" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Référentiels</text>
  <rect x="670" y="286" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="687" y="295" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Annexe : clés de configuration</text>
  <rect x="410" y="307" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="316" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Annexe : référence API</text>
  <rect x="240" y="341" width="134" height="26" rx="5" fill="url(#ir-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="307.0" y="357.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le PDF</text>
  <rect x="382" y="341" width="162" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="463.0" y="357.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le Markdown</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">5e onglet des Rapports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à côté du rapport d'audit</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les libellés suivent la langue</text>
  <line x1="200" y1="117.0" x2="410" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">neuf premières cochées</text>
  <line x1="200" y1="237.0" x2="410" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clés techniques</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour un lecteur technique</text>
  <line x1="1000" y1="177.0" x2="710" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
  <rect x="1000" y="335" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="350" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="1010" y="363" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie dans reports/</text>
  <line x1="1000" y1="352.0" x2="534" y2="354" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ir-arrow)"/>
</svg>

| Contrôle | Description |
|---|---|
| **Langue** | Liste déroulante : français ou anglais. Par défaut, la langue de l'interface. Les libellés des réglages, des statuts et des listes suivent la langue choisie. |
| **Libellé de date (page de garde)** | Texte libre imprimé sur la page de garde (par ex. *Mise en production V2*). Vide = date du jour. |
| **Afficher les clés techniques à côté des libellés** | Ajoute la clé de configuration après chaque libellé (`Allow reprocess · allowReprocess`). Utile pour un lecteur technique ; désactivé par défaut. |
| **Sections** | Cocher les parties à inclure. Les neuf premières sont cochées par défaut ; les deux annexes sont facultatives en raison de leur longueur. |
| **Télécharger le PDF / Télécharger le Markdown** | Produit le fichier et le télécharge. Une copie est conservée dans le dossier `reports` de l'environnement (`<appHome>/<env>/reports/nomaubl-implementation-<date>-<heure>.pdf` ou `.md`). |

---

## Contenu du rapport

| Section | Contenu |
|---|---|
| **Contexte** | Environnement, version du produit et de la norme (XP Z12-014), date de génération, répertoire de l'application, type et schéma de base, sociétés, nombre de documents, auteur. |
| **Architecture** | Les flux activés sur l'instance et leur déclencheur : envoi à la PA, suivi des imports, récupération des statuts, factures reçues, e-reporting, contrôle d'annuaire, lots planifiés, dossiers surveillés, états de la file d'impression JDE, connecteurs par type, authentification. Un flux indiqué *inactif* est configuré sans déclencheur et reste lançable à la demande. Puis la chaîne de traitement : sources, transformation, validation, tables d'archive, sens. |
| **Fonctionnement et règles de gestion** | Le guide fonctionnel : à quoi sert chaque page (dans l'ordre du menu), le cycle de vie d'une facture, la protection des factures déposées, les règles de modification, de correction de l'acheteur, de renvoi, de validation, de changement de statut et d'envoi par e-mail avec le droit requis pour chacune, les deux modes de retraitement, la récupération des statuts avec les contrôles d'intégrité et d'ordre, le marquage « vue » et les notifications, puis un aide-mémoire des statuts de plateforme (AFNOR XP Z12-014) et des étapes internes `99xx`. |
| **Documents** | Un tableau de tous les documents (source, sens, type de traitement, modèle PDF), les variables de chemin avec leur valeur sur cette instance, puis une sous-section par document : dossiers, fichiers XSL et RTF, feuille UBL, options de retraitement, renvois vers sa pré-transformation et sa feuille UBL, champs d'indexation et autres réglages. Puis les modèles PDF : documents qui les utilisent, mise en page, logo, couleurs, sections et options. |
| **Transformation UBL et règles** | Valeurs par défaut communes (devise, identifiant de spécification, schémas, valeurs par BT), sociétés émettrices, tables de correspondance et règles (type de transaction, catégorie de TVA, exonération, moyen de paiement, unité…), jeux de règles de validation avec leur version et leur nombre de règles, règles spécifiques, couverture par document, puis une sous-section par pré-transformation (renommages, règles personnalisées, suppressions) et par feuille UBL : profil, correspondances redéfinies et correspondance complète **champ source → BT → chemin UBL**. |
| **Réglages de plateforme** | Réglages e-invoicing (par défaut et par société), e-reporting, annuaire, types de document avec leurs indicateurs d'envoi et de validation. |
| **Exploitation** | Tâches planifiées avec leur déclencheur, dossiers surveillés, règles de notification avec les actions qu'elles déclenchent, actions sur facture, contrôles d'intégrité, connecteurs avec leur hôte et leur type d'authentification. |
| **Sécurité** | Mode d'authentification et durée de session, rôles (pages, actions, sociétés, fonctions, utilisateurs), utilisateurs avec leur rôle, leur état et un éventuel changement de mot de passe en attente. |
| **Référentiels** | Le catalogue des statuts (libellés, codes PA, groupes), chaque liste de référence et liste personnalisée avec ses entrées, les noms de tables configurés. |
| **Annexe : clés de configuration** | Toutes les propriétés de chaque modèle système, secrets masqués. |
| **Annexe : référence API** | Le document API de l'instance, opération par opération. |

:::info[Les secrets ne sont jamais imprimés]
Mots de passe, jetons, secrets client, clés d'API, URL des connecteurs et clés propres à l'instance apparaissent sous la forme `••••••`. Le rapport peut être remis à un tiers sans retouche ; reste à vérifier que le contenu métier (adresses e-mail des règles de notification, noms des utilisateurs) peut être communiqué.
:::

---

## Mise en page du PDF

Le PDF suit les conventions documentaires du produit : page de garde avec l'environnement, la date, l'auteur et la version ; table des matières cliquable et signets PDF ; en-tête et pied de page *x / y* ; notes de lecture dans des encadrés ; variables de chemin (`APP_HOME`, `ENV`, `PROCESS_HOME`, `TEMPLATE`, `FILE_NAME`) affichées comme pastilles dans les chemins ; renvois *voir § 5.10* entre un document et sa feuille UBL. Le fichier Markdown porte le même contenu, pour un wiki ou un dépôt Git.

---

## Ligne de commande

Le même rapport se produit sans l'interface, pour un état des lieux planifié ou une chaîne d'intégration :

```bash
java -jar nomaubl.jar -report <configFile> [--lang fr|en] [--format md|pdf] [--out <file>] \
     [--date <label>] [--keys] [--sections context,architecture,...]
```

Par défaut : les neuf premières sections, en Markdown, en français. Voir [Ligne de commande](../management/command-line.md#report).

---

## Accès

L'onglet fait partie de la page *Rapports* : accorder **Rapports** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md). La route d'API est `GET /api/reports/implementation`.

---

## Conseils & bonnes pratiques

- **Le produire après chaque mise en production et chaque mise à jour.** La copie conservée dans le dossier `reports` forme l'historique daté de la configuration, à côté des [versions de fichiers](../management/file-versions.md).
- **Laisser les clés techniques masquées pour un lecteur métier.** Les libellés suffisent à une équipe projet ; les clés servent à ceux qui modifient les fichiers de configuration ou lisent l'API.
- **Réserver les annexes au dossier d'audit.** Les annexes des clés de configuration et de l'API multiplient la longueur du PDF.
