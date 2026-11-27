---
title: Menus
description: "Développement → Menus dans Nomajde : les tâches des menus JD Edwards EnterpriseOne sur une seule page — toutes les tâches (F9000) avec leurs descriptions dans d'autres langues (F9002), les emplacements d'une tâche, et une vue de tâches dessinée en arbre, où une tâche s'ajoute sous un dossier ou change de place par sa relation (F9001)."
keywords: [Nomajde, JD Edwards, JDE E1, menus, tâches, vue de tâches, relations entre tâches, F9000, F9001, F9002, GetUID, EnterpriseOne Menus, cas d'emploi, paquet de modifications]
---

# Menus

**Développement → Menus** réunit sur une seule page les tâches des menus JD Edwards EnterpriseOne. Un menu JD Edwards se compose de **tâches** — un dossier, une application, un état, une URL — placées dans des **vues de tâches** par des **relations** : une tâche sous un parent, à une séquence donnée. La page compte trois onglets : **Tâches** recense toutes les tâches et ouvre chacune pour la modifier, **Cas d’emploi** indique où se trouve une tâche et ce qu'elle contient, **Le menu** dessine une vue de tâches en arbre, pour y ajouter une tâche sous un dossier ou la déplacer.

Chaque modification est écrite dans JD Edwards par les formulaires des trois tables JD Edwards concernées — les tâches (F9000), les relations (F9001) et les descriptions dans d'autres langues (F9002) —, avec leurs règles, et elle est enregistrée dans le [paquet de modifications](../../nomaflow/change-packages.md) actif.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 364" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="340" rx="14" fill="url(#mnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Les tâches des menus JD Edwards : ce qu’elles sont, où elles servent, comment un menu est construit.</text>
  <rect x="240.0" y="76" width="234.7" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="250.0" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TÂCHES</text>
  <text x="250.0" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">18432 tâche(s)</text>
  <rect x="482.7" y="76" width="234.7" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.7" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CAS D’EMPLOI</text>
  <text x="492.7" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">choisissez une tâche</text>
  <rect x="725.3" y="76" width="234.7" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3" y="91" fill="#64748b" fontSize="8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LE MENU</text>
  <text x="735.3" y="107" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">12905 relation(s)</text>
  <rect x="240" y="128" width="117" height="22" rx="5" fill="url(#mnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="142.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une tâche</text>
  <text x="369" y="143" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Un clic ouvre la tâche : la modifier, la dupliquer, la supprimer, la décrire dans d’autres langues.</text>
  <rect x="240" y="162" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="440" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE TÂCHE</text>
  <text x="540" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="660" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="730" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="806" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUIT</text>
  <text x="868" y="179.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EMPLACEMENTS</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <text x="440" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000051</text>
  <text x="540" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interactive Application</text>
  <text x="660" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="730" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="806" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01</text>
  <text x="868" y="210.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Daily Processing</text>
  <text x="440" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">G0110</text>
  <text x="540" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Folder</text>
  <text x="660" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="730" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="806" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">01</text>
  <text x="868" y="240.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="254" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="440" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000412</text>
  <text x="540" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Interactive Application</text>
  <text x="660" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="730" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="806" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="868" y="270.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="240" y="284" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Print Checks</text>
  <text x="440" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">JDE000437</text>
  <text x="540" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Batch Application</text>
  <text x="660" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">R04572</text>
  <text x="730" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="806" y="300.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04</text>
  <text x="868" y="300.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="240" y="314" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Custom Reports</text>
  <text x="440" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ACME0001</text>
  <text x="540" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Folder</text>
  <text x="660" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="730" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="806" y="330.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">55</text>
  <text x="868" y="330.5" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">0</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tâches · cas d’emploi · menu</text>
  <line x1="200" y1="97.0" x2="240" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une tâche</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">identifiant fourni par JDE</text>
  <line x1="200" y1="167.0" x2="240" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre la fiche de la tâche</text>
  <line x1="200" y1="257.0" x2="340" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une vue de tâches en arbre</text>
  <line x1="1000" y1="97.0" x2="843" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Emplacements</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic : cas d’emploi</text>
  <line x1="1000" y1="267.0" x2="920" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
</svg>

Les trois cartes du haut sont les onglets, chacune avec son compteur : les tâches, les emplacements de la tâche choisie, les relations de la vue de tâches choisie.

---

## Tâches \{#tasks\}

La grille présente toutes les tâches des menus : recherche, filtres, regroupements, colonnes, vues et export, comme sur toute liste.

| Colonne | Contenu |
|---|---|
| **Description** | Le nom de la tâche tel que le menu l'affiche. |
| **Nom de tâche** | Son code dans les menus. |
| **Type** | Dossier, application interactive, application batch, URL… d'après les types de tâche de JD Edwards. |
| **Objet** | L'application ou l'état que la tâche lance. |
| **Version** | La version utilisée. |
| **Produit** | Son code produit. |
| **Emplacements** | Le nombre d'emplacements de la tâche dans les vues de tâches. Un clic l'ouvre dans **Cas d’emploi**. |

Un clic sur une ligne ouvre la fiche de la tâche ; **Ajouter une tâche** l'ouvre vide.

### La fiche de la tâche \{#task-form\}

<svg viewBox="0 0 1200 336" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnf-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnf-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnf-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="300" rx="14" fill="url(#mnf-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Tâches</text>
  <line x1="230" y1="58" x2="970" y2="58" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche</text>
  <line x1="236" y1="88" x2="280" y2="88" stroke="#4a9eff" strokeWidth="2"/>
  <text x="304" y="80" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Autres langues</text>
  <text x="240" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DE TÂCHE</text>
  <rect x="240" y="118" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="132.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">JDE000412</text>
  <text x="490" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="490" y="118" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="132.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE DE TÂCHE</text>
  <rect x="240" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Interactive Application ▾</text>
  <text x="490" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJECT NAME</text>
  <rect x="490" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">P0411 ▾</text>
  <text x="740" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION</text>
  <rect x="740" y="164" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="178.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="240" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FORM NAME</text>
  <rect x="240" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">W0411G</text>
  <text x="490" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRODUCT CODE</text>
  <rect x="490" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="224.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">04 Accounts Payable ▾</text>
  <text x="740" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SYSTEM CODE PRODUIT</text>
  <rect x="740" y="210" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="224.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="250" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNE DE COMMANDE OU URL</text>
  <rect x="240" y="256" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="230" y1="290" x2="970" y2="290" stroke="#1f2937" strokeWidth="1"/>
  <rect x="882" y="298" width="78" height="22" rx="5" fill="url(#mnf-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="921.0" y="312.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="806" y="298" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="312.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="720" y="298" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="760.0" y="312.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <rect x="646" y="298" width="68" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680.0" y="312.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Autres langues</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">descriptions par langue</text>
  <line x1="1000" y1="77.0" x2="390" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs de la tâche</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellés du dictionnaire JDE</text>
  <line x1="200" y1="167.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet et version</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que la tâche lance</text>
  <line x1="1000" y1="167.0" x2="970" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dupliquer</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une copie, nouvel identifiant</text>
  <line x1="1000" y1="257.0" x2="800" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnf-arrow)"/>
</svg>

L'onglet **Tâche** regroupe les champs de la tâche, avec les libellés du dictionnaire de données JD Edwards : le nom de tâche, la description et le type de tâche (obligatoires), l'objet et sa version, le formulaire, les codes produit, le code d'option, la ligne de commande ou URL et ses paramètres. L'onglet **Autres langues** donne les descriptions de la tâche dans d'autres langues, une par langue, ajoutées, modifiées et supprimées sur place ; il apparaît sur une tâche existante.

| Bouton | Effet |
|---|---|
| **Enregistrer** | Écrit la tâche dans JD Edwards. |
| **Dupliquer** | Ouvre une copie de la tâche, à modifier puis enregistrer comme nouvelle tâche. |
| **Supprimer** | Supprime la tâche. |

Une nouvelle tâche reçoit son identifiant **de JD Edwards lui-même** : quand la fiche s'ouvre pour un ajout, ou après **Dupliquer**, elle demande un identifiant à JD Edwards par le serveur AIS, avant toute saisie. Cet identifiant est technique : la fiche ne l'affiche pas. Si JD Edwards ne répond pas, la fiche s'arrête et en donne la raison.

---

## Cas d’emploi \{#where-used\}

<svg viewBox="0 0 1200 326" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="290" rx="14" fill="url(#mnu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Cas d’emploi</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TÂCHE</text>
  <rect x="240" y="94" width="560" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">JDE000437  Print Checks ▾</text>
  <rect x="810" y="94" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="863.0" y="108.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvrir la tâche</text>
  <text x="240" y="134" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDE000437 · Batch Application · R04572</text>
  <text x="240" y="160" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Elle se trouve dans</text>
  <rect x="240" y="168" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <text x="420" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOUS</text>
  <text x="800" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉQUENCE</text>
  <text x="890" y="185.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVE</text>
  <rect x="240" y="200" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus</text>
  <text x="420" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable › Automatic Payment Processing</text>
  <text x="800" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">30</text>
  <text x="890" y="216.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">oui</text>
  <rect x="240" y="230" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus</text>
  <text x="420" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Financials › Accounts Payable › Manual Payment Processing</text>
  <text x="800" y="246.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">50</text>
  <rect x="890" y="235.0" width="32" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="906.0" y="246.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NON</text>
  <text x="240" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Elle contient</text>
  <text x="240" y="296" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Cette tâche ne contient rien.</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir une tâche</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par nom ou par code</text>
  <line x1="200" y1="107.0" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur un emplacement</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'affiche dans Le menu</text>
  <line x1="200" y1="217.0" x2="240" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir la tâche</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa fiche, pour la modifier</text>
  <line x1="1000" y1="107.0" x2="916" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Emplacement inactif</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la relation est désactivée</text>
  <line x1="1000" y1="217.0" x2="910" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1000" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Elle contient</text>
  <text x="1010" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour un dossier : ses tâches</text>
  <line x1="1000" y1="275.0" x2="390" y2="292" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
</svg>

**Cas d’emploi** porte sur une tâche, choisie dans la liste par sa description ou son code — la colonne **Emplacements** de l'onglet Tâches y mène directement. Sous la tâche figurent son code, son type et son objet.

| Bloc | Contenu |
|---|---|
| **Elle se trouve dans** | Chaque emplacement de la tâche : la **Vue de tâches**, le chemin pour y arriver (**Sous** — les dossiers depuis le sommet de la vue, plusieurs chemins quand le dossier figure à plusieurs endroits), sa **Séquence** et l'état **Active** de la relation. Un clic sur une ligne ouvre la vue de tâches dans **Le menu**, avec une recherche sur la tâche. |
| **Elle contient** | Pour un dossier, les tâches placées dessous, vue par vue, dans l'ordre du menu : séquence, nom, nom de tâche, type, objet. Un clic sur l'une d'elles en fait la tâche choisie. |

**Ouvrir la tâche** ouvre sa fiche.

---

## Le menu \{#menu\}

<svg viewBox="0 0 1200 382" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#mnm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Le menu</text>
  <text x="240" y="88" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE DE TÂCHES</text>
  <rect x="240" y="94" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="108.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">91 EnterpriseOne Menus ▾</text>
  <rect x="470" y="94" width="360" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="108.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">chercher un menu, une tâche ou une application…</text>
  <rect x="840" y="94" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="898.5" y="108.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter au sommet</text>
  <text x="240" y="143" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Choisi — Accounts Payable · Financials</text>
  <rect x="437" y="128" width="148" height="22" rx="5" fill="url(#mnm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="511.0" y="142.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une tâche dessous</text>
  <rect x="591" y="128" width="102" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="642.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Changer sa place</text>
  <rect x="699" y="128" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="747.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvrir la tâche</text>
  <rect x="802" y="128" width="82" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="843.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cas d’emploi</text>
  <rect x="240" y="166" width="720" height="196" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="184" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="266" y="184" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Financials</text>
  <text x="948" y="184" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <line x1="241" y1="192" x2="959" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="208" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="284" y="208" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">General Accounting</text>
  <text x="948" y="208" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <rect x="241" y="216" width="718" height="24" fill="rgba(74,158,255,0.12)"/>
  <line x1="241" y1="216" x2="959" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="232" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="284" y="232" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Payable</text>
  <text x="948" y="232" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <line x1="241" y1="240" x2="959" y2="240" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="302" y="256" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Daily Processing</text>
  <text x="948" y="256" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10</text>
  <line x1="241" y1="264" x2="959" y2="264" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="280" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="302" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Automatic Payment Processing</text>
  <text x="948" y="280" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <line x1="241" y1="288" x2="959" y2="288" stroke="#1f2937" strokeWidth="1"/>
  <text x="288" y="304" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">·</text>
  <text x="302" y="304" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Supplier Ledger Inquiry</text>
  <text x="440.36" y="304" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="948" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">40</text>
  <line x1="241" y1="312" x2="959" y2="312" stroke="#1f2937" strokeWidth="1"/>
  <text x="270" y="328" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="284" y="328" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accounts Receivable</text>
  <text x="948" y="328" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">30</text>
  <line x1="241" y1="336" x2="959" y2="336" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="352" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▸</text>
  <text x="266" y="352" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Logistics Management</text>
  <text x="948" y="352" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">20</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque résultat et son chemin</text>
  <line x1="200" y1="107.0" x2="540" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur un dossier</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'ouvre et le choisit</text>
  <line x1="200" y1="257.0" x2="280" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter au sommet</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">directement sous la vue</text>
  <line x1="1000" y1="57.0" x2="917" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sur l'emplacement choisi</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter dessous · changer sa place</text>
  <line x1="1000" y1="137.0" x2="884" y2="139" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Séquence</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'ordre dans le dossier</text>
  <line x1="1000" y1="267.0" x2="924" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnm-arrow)"/>
</svg>

**Le menu** dessine une **vue de tâches** — d'abord celle qui compte le plus de tâches — telle que JD Edwards la construit : les dossiers s'ouvrent d'un clic, chaque ligne indique l'objet lancé et sa séquence. La zone de recherche (deux caractères au moins) donne les menus, tâches et applications correspondants, chacun avec son chemin ; les 300 premiers sont affichés.

Un clic sur une ligne la choisit. Sur l'emplacement choisi :

| Bouton | Effet |
|---|---|
| **Ajouter une tâche dessous** | Pour un dossier : ouvre le formulaire de la relation sur la vue et ce dossier, avec une séquence proposée après la dernière (de dix en dix) et la relation active. La tâche à placer se choisit dans le formulaire. |
| **Changer sa place** | Ouvre le formulaire de la relation : modifier la **Séquence** ou décocher **Active** ; **Supprimer** retire la tâche de ce dossier — la tâche elle-même reste. |
| **Ouvrir la tâche** | Ouvre la fiche de la tâche. |
| **Cas d’emploi** | Ouvre la tâche dans **Cas d’emploi**. |

**Ajouter au sommet** place une tâche directement sous la vue.

Le formulaire de la relation comprend la **Vue de tâches**, la **Tâche parente** et la **Tâche enfant** — non modifiables sur une relation existante —, la **Séquence**, **Active**, et les deux champs de release que JD Edwards conserve sur chaque relation. Après un enregistrement, l'arbre, la liste et les emplacements sont relus.

---

## Accès \{#access\}

La page se trouve dans le dossier **Développement** du menu Nomajde. Le rôle prédéfini **Développeur** y a accès en lecture et modification (voir [Rôles prédéfinis](../overview.md#roles)), de même que **Administrateur**. La page lit et écrit les trois tables par leurs propres écrans : l'accès à la page donne ce que ces écrans demandent — la lecture, et la modification quand le rôle peut modifier la page.

L'ajout d'une tâche demande son identifiant à JD Edwards par le serveur AIS : la connexion AIS doit être configurée.

---

## Conseils & bonnes pratiques \{#tips\}

- Avant de supprimer une tâche, ouvrir **Cas d’emploi** : une tâche présente dans plusieurs vues disparaît de toutes.
- Pour retirer une tâche d'un seul dossier, passer par **Changer sa place → Supprimer** dans **Le menu** : la tâche reste à ses autres emplacements.
- Espacer les séquences (de dix en dix) : une tâche ajoutée plus tard entre deux autres ne demande alors aucune renumérotation.
- Les modifications faites ici sont enregistrées dans le paquet de modifications comme celles de tout écran : un menu se construit en développement, puis se promeut.

---

## Voir aussi

- [Filtrage des menus](../security-maintenance/menu-filtering.md) — les rôles qui voient une tâche d'une vue de tâches.
- [Gestion de la sécurité → un menu](../security-management/menu.md) — qui voit une tâche de menu, rôle par rôle.
- [Object Management Workbench](../reviews/omw.md) — les projets OMW, leurs objets et leur journal.
