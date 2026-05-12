---
title: Connecteurs FTP
description: "Configurer l'accès SFTP au serveur d'entreprise JD Edwards pour permettre à NomaUBL de récupérer les spools directement dans le PrintQueue JDE."
keywords: [NomaUBL, FTP, SFTP, JD Edwards, JDE, serveur d'entreprise, Enterprise Server, PrintQueue, spool, extraction]
---

# Connecteurs FTP

Cet écran configure l'**accès SFTP au serveur d'entreprise JD Edwards** pour que NomaUBL puisse récupérer les **spools directement dans le PrintQueue JDE**. C'est le mode d'extraction par fichier, en alternative — ou en complément — à l'extraction depuis la base BIP définie dans *Database Connectors → JD Edwards*.

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages de Configuration sont indépendantes de la source (JDE, SAP, NetSuite, ERP personnalisé) ; celle-ci ne s'applique que quand la source est JD Edwards et que les spools doivent être récupérés dans le répertoire PrintQueue du serveur d'entreprise.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ftp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ftp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ftp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="360" rx="14" fill="url(#ftp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Connecteur FTP — PrintQueue JD Edwards</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#ftp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Enreg.</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur SFTP</text>

  <text x="240" y="118" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <rect x="320" y="108" width="320" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="125" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">sftp.enterprise.example.com</text>
  <text x="660" y="125" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PORT</text>
  <rect x="704" y="108" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="714" y="125" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">22</text>

  <text x="240" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <rect x="320" y="148" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="165" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">nomaubl-svc</text>

  <text x="240" y="198" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MOT DE PASSE</text>
  <rect x="320" y="188" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="205" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••••</text>

  <text x="240" y="238" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉPERTOIRE</text>
  <rect x="320" y="228" width="460" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="245" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">/u01/jde/PrintQueue/</text>

  <line x1="240" y1="278" x2="780" y2="278" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="296" width="540" height="62" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="252" y="316" fill="#fb923c" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">⚠ PAGE SPÉCIFIQUE À JD EDWARDS</text>
  <text x="252" y="334" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Utilisé uniquement quand les spools proviennent d'un répertoire PrintQueue JDE.</text>
  <text x="252" y="350" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Les autres pages de Configuration restent indépendantes de la source — SAP, NetSuite, ERP personnalisé.</text>

  <rect x="20" y="108" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hôte SFTP + port</text>
  <text x="30" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveur d'entreprise JDE · 22 par défaut</text>
  <line x1="200" y1="124" x2="320" y2="124" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Compte de service</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">droits minimaux · mot de passe</text>
  <line x1="200" y1="206" x2="320" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="20" y="228" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="243" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Répertoire PrintQueue</text>
  <text x="30" y="256" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chemin absolu sur le serveur JDE</text>
  <line x1="200" y1="244" x2="320" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>

  <rect x="820" y="306" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="321" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JDE uniquement</text>
  <text x="830" y="334" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les autres ERP utilisent les connecteurs API</text>
  <line x1="820" y1="322" x2="780" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ftp-arrow)"/>
</svg>

---

## SFTP Server

| Champ | Description |
|---|---|
| **Host** | Nom d'hôte ou IP du serveur d'entreprise JDE accessible en SFTP (par ex. `sftp.example.com`). |
| **Port** | Port SFTP. Valeur par défaut `22`. |
| **User** | Compte SFTP disposant d'un accès en lecture au répertoire PrintQueue. |
| **Password** | Mot de passe associé au compte SFTP. |
| **Directory** | Chemin absolu du répertoire PrintQueue sur le serveur d'entreprise (par ex. `/u01/jde/PrintQueue/`). NomaUBL liste ce répertoire pour identifier les spools candidats à la récupération. |

---

## Conseils & bonnes pratiques

- **Utiliser un compte SFTP dédié restreint au PrintQueue.** Un compte à privilèges minimaux simplifie l'audit et la révocation, et limite les conséquences en cas de fuite des identifiants.
- **Valider la connexion SFTP depuis un client autonome** (par ex. `sftp user@host`) avant enregistrement, en particulier le chemin **Directory** — une faute de frappe se traduit silencieusement par « aucun spool trouvé ».
- **Combiner ce connecteur avec celui de la base BIP quand les deux modes de récupération sont utilisés.** Le SFTP récupère le fichier spool ; le connecteur BIP récupère les BLOB de sortie générés. Les deux sont indépendants et peuvent coexister.
- **Vérifier que le serveur d'entreprise conserve les spools assez longtemps** pour que l'intervalle d'interrogation de NomaUBL puisse les détecter — les jobs de purge JDE peuvent supprimer les spools plus vite que le rythme d'interrogation NomaUBL.
