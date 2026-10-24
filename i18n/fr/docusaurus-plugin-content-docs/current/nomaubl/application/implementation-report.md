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

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Statistiques statuts</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Intégrité</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Requêteur</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.75}}>Rapport d'audit</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid #4a9eff', background: 'rgba(74,158,255,0.10)', color: '#4a9eff', fontWeight: 600}}>Rapport d'implémentation</span>
  </div>
  <div style={{opacity: 0.75, marginBottom: '12px'}}>Description technique et fonctionnelle de cette instance, produite à partir de sa configuration et de sa base de données. Secrets et clés propres à l'instance masqués.</div>
  <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '8px 12px', alignItems: 'center'}}>
    <b>Langue</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '160px'}}>Français ▾</span>
    <b>Libellé de date (page de garde)</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>par défaut : aujourd'hui</span>
    <span></span><span>☐ Afficher les clés techniques à côté des libellés</span>
    <b>Sections</b><span style={{lineHeight: 1.9}}>☑ Contexte · ☑ Architecture · ☑ Fonctionnement et règles de gestion · ☑ Documents · ☑ Transformation UBL et règles · ☑ Réglages de plateforme · ☑ Exploitation · ☑ Sécurité · ☑ Référentiels · ☐ Annexe : clés de configuration · ☐ Annexe : référence API</span>
  </div>
  <div style={{display: 'flex', gap: '8px', marginTop: '14px'}}>
    <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Télécharger le PDF</span>
    <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.35)'}}>Télécharger le Markdown</span>
  </div>
</div>

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
