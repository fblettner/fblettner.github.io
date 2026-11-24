---
title: Taille des serveurs
description: "Supervision → Taille des serveurs dans Nomajde : une ligne par machine de la plateforme JD Edwards EnterpriseOne — processeurs, cœurs physiques, mémoire, disque, famille de processeur, virtualisation, cluster et une note — renseignée à la main, jamais collectée sur les machines. Lister les serveurs ajoute une ligne par machine trouvée ; ce qui reste vide est mesuré par la base ou pris du minimum publié par Oracle sur OCI. Alimente la synthèse de la plateforme, la cible OCI et le décompte des licences au processeur de Nomasx-1."
keywords: [Nomajde, JD Edwards, JDE E1, taille des serveurs, dimensionnement, capacité, processeurs, vCPU, cœurs physiques, mémoire, disque, Oracle Cloud Infrastructure, OCI, configuration standard, serveur de déploiement, licences au processeur, facteur de cœur, cluster, hyperviseur, VMware]
---

# Taille des serveurs

**Supervision → Taille des serveurs** conserve la taille de chaque machine de la plateforme JD Edwards EnterpriseOne : ses processeurs, ses cœurs physiques, sa mémoire et son disque. Rien n'est collecté sur les machines — Server Manager indique ce qu'un serveur *utilise*, pas la taille de la machine — : la taille est donc **renseignée**, une ligne par machine. Ce qui reste vide est complété par ce que la base dit de son propre serveur, sinon par une **configuration standard**.

Ces tailles sont lues par les onglets [Capacité](../synthesis.md#capacity) et [Améliorations](../synthesis.md#improvements) de la synthèse de la plateforme, et la [Cible OCI](./oci-target.md) en part pour dimensionner la production. Avec la famille de processeur, la virtualisation et le cluster, elles servent aussi à Nomasx-1 pour compter les **licences au processeur** — voir [Licences au processeur](#processor-licences).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 306" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nssz-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nssz-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nssz-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nssz-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="268" rx="14" fill="url(#nssz-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Taille des serveurs</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La taille de chaque serveur, telle que vous la connaissez : ce qui reste vide est mesuré ou standard.</text>
  <rect x="240" y="78" width="117" height="22" rx="5" fill="url(#nssz-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="298.5" y="92.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="365" y="78" width="97" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="413.5" y="92.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="470" y="78" width="127" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="533.5" y="92.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚡ Lister les serveurs</text>
  <rect x="240" y="112" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEUR</text>
  <text x="354" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <text x="494" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS</text>
  <text x="578" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CŒURS PHYSIQUES</text>
  <text x="678" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉMOIRE (GO)</text>
  <text x="758" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DISQUE (GO)</text>
  <text x="828" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTE</text>
  <text x="900" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIÉ PAR</text>
  <rect x="240" y="144" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEDB01</text>
  <text x="354" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Serveur de base de données</text>
  <text x="494" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="578" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="678" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="758" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="828" y="159.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="900" y="159.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="172" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <text x="354" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Serveur d'entreprise</text>
  <text x="494" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">16</text>
  <text x="578" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">8</text>
  <text x="678" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">64</text>
  <text x="758" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">300</text>
  <text x="828" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">VM, 2025</text>
  <text x="900" y="187.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="200" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="354" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Serveur web et AIS</text>
  <text x="494" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">8</text>
  <text x="578" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">4</text>
  <text x="678" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">32</text>
  <text x="758" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="828" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="900" y="215.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="228" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEDEP01</text>
  <text x="354" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Serveur de déploiement</text>
  <text x="494" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">4</text>
  <text x="578" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">2</text>
  <text x="678" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">16</text>
  <text x="758" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">250</text>
  <text x="828" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">ajouté à la main</text>
  <text x="900" y="243.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="240" y="272" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Une cellule vide : le chiffre de la base pour son propre serveur, sinon la configuration standard du rôle.</text>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lister les serveurs</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par machine trouvée</text>
  <line x1="1000" y1="73.0" x2="597" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par machine</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son nom et son rôle</text>
  <line x1="200" y1="167.0" x2="250" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="20" y="238" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="253" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajoutée à la main</text>
  <text x="30" y="266" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une machine non vue</text>
  <line x1="200" y1="255.0" x2="250" y2="249" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Laissée vide</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mesurée, sinon standard</text>
  <line x1="1000" y1="137.0" x2="550" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="1000" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffres renseignés</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">priment, champ par champ</text>
  <line x1="1000" y1="213.0" x2="690" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
</svg>

---

## La grille \{#grid\}

| Colonne | Contenu |
|---|---|
| **Serveur** | Le nom de la machine. Il est rapproché des noms que trouve la lecture de l'[Architecture](./architecture.md) sans tenir compte de la casse, du domaine DNS ni d'un port : `JDEENT01.example.com`, `jdeent01` et `jdeent01:6017` désignent la même machine. |
| **Rôle** | *Serveur de base de données*, *Serveur d'entreprise*, *Serveur web et AIS*, *Serveur de déploiement*, *Plusieurs rôles sur une machine*, *Hôte physique d'un cluster (hyperviseur)* ou *Autre*. |
| **Processeurs (threads, vCPU)** | Ce que le système compte comme processeurs. |
| **Cœurs physiques** | Les cœurs de la machine. |
| **Mémoire (Go)** | La mémoire de la machine. |
| **Disque (Go)** | Le disque de la machine. |
| **Famille de processeur** | La puce, avec le facteur de cœur d'Oracle dans son libellé (*Intel Xeon, AMD EPYC / Opteron, puces de poste de travail — 0,5*, *IBM POWER6 et suivants — 1*…). |
| **Virtualisation** | *Machine physique*, *Partition matérielle (acceptée par Oracle)*, *Machine virtuelle VMware* ou *Autre machine virtuelle*. |
| **Cluster** | Le cluster de virtualisation auquel appartient la machine. |
| **Note** | Texte libre — l'origine des chiffres, par exemple. |
| **Modifié par**, **Modifié le** | L'auteur et la date du dernier enregistrement de la ligne. En lecture seule. |

**Ajouter une ligne** ajoute une machine à la main ; les outils habituels de la grille — **Modifier en lot**, filtres, export — s'appliquent.

---

## Lister les serveurs \{#list\}

**Lister les serveurs** ajoute une ligne pour chaque machine trouvée par la lecture de l'architecture qui n'en a pas encore, avec son nom et son rôle ; les tailles restent à saisir. Une ligne existante n'est jamais modifiée : l'action peut être relancée après l'installation d'un nouveau serveur.

Une machine que la lecture ne montre pas — typiquement un serveur de déploiement — s'ajoute à la main avec **Ajouter une ligne**, en précisant son rôle. Elle compte alors avec les autres, marquée *renseigné seulement — la lecture de l'architecture ne le montre pas* dans la synthèse de la plateforme.

---

## L'origine de chaque chiffre \{#origin\}

Chaque chiffre est pris, champ par champ, à la première source qui le connaît :

| Origine | Provenance |
|---|---|
| **renseigné** | La valeur saisie dans cette grille. Une valeur renseignée l'emporte toujours. |
| **mesuré par la base** | Pour le serveur de base de données seulement : les processeurs, cœurs et mémoire que la base — Oracle, SQL Server ou Db2 — indique pour son propre hôte. |
| **configuration standard** | Le minimum publié par Oracle pour JD Edwards EnterpriseOne 9.2 sur Oracle Cloud Infrastructure (One-Click Provisioning), selon chaque rôle porté par la machine : 2 cœurs et 30 Go par serveur ; le disque selon le rôle — 50 Go pour la base, 75 Go pour un serveur d'entreprise, 20 Go pour un serveur web ou AIS, 30 Go de plus pour le serveur d'applications, 100 Go pour Server Manager, 210 Go pour un serveur de déploiement. |
| **compté d'après l'autre chiffre** | Quand un seul des deux chiffres, processeurs ou cœurs, est connu, l'autre en est déduit — deux processeurs par cœur. |

Une machine qui porte plusieurs rôles cumule la configuration standard de chacun. La colonne **Rôle** indique ce que porte une machine que la lecture ne montre pas ; *Plusieurs rôles sur une machine* conserve ce que la lecture a trouvé.

La configuration standard est un point de départ, pas un dimensionnement : la synthèse de la plateforme et la cible OCI indiquent combien de machines en dépendent encore.

Une ligne de rôle *Hôte physique d'un cluster (hyperviseur)* n'est pas une machine de la plateforme : la synthèse de la plateforme et la cible OCI l'écartent. Elle n'est renseignée que pour les licences au processeur.

---

## Boîte de dialogue d'édition \{#edit\}

**Ajouter une ligne**, ou un double clic sur une ligne, ouvre le formulaire, en deux onglets sur deux colonnes : **Taille** et **Licences au processeur**.

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsszd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsszd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsszd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsszd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="282" rx="14" fill="url(#nsszd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau · Taille des serveurs</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="78" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TAILLE</text>
  <line x1="240" y1="83" x2="274" y2="83" stroke="#4a9eff" strokeWidth="2"/>
  <text x="298.116" y="78" fill="#64748b" fontSize="8.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LICENCES AU PROCESSEUR</text>
  <text x="240.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEUR (OBLIGATOIRE)</text>
  <rect x="240.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="123.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDEENT01</text>
  <text x="608.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE</text>
  <rect x="608.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="123.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Serveur d'entreprise ▾</text>
  <text x="240.0" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSEURS (THREADS, VCPU)</text>
  <rect x="240.0" y="153" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="167.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">16</text>
  <text x="608.0" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CŒURS PHYSIQUES</text>
  <rect x="608.0" y="153" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="167.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <text x="240.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MÉMOIRE (GO)</text>
  <rect x="240.0" y="197" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="211.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">64</text>
  <text x="608.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DISQUE (GO)</text>
  <rect x="608.0" y="197" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="211.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">300</text>
  <text x="240.0" y="236" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="240.0" y="241" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="255.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">VM, 2025</text>
  <line x1="220" y1="258" x2="980" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <rect x="900" y="266" width="60" height="22" rx="5" fill="url(#nsszd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="280.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="828" y="266" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.0" y="280.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Serveur</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son nom, rapproché de la lecture</text>
  <line x1="200" y1="113.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Processeurs · cœurs</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'un donné, l'autre suit</text>
  <line x1="200" y1="167.0" x2="240" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Note</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">d'où vient le chiffre</text>
  <line x1="200" y1="247.0" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Second onglet</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puce, virtualisation, cluster</text>
  <line x1="1000" y1="57.0" x2="431.208" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="1000" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle</text>
  <text x="1010" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fixe la configuration standard</text>
  <line x1="1000" y1="129.0" x2="960" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mémoire · disque</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en Go ; vide = inconnu</text>
  <line x1="1000" y1="207.0" x2="960" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
</svg>

| Champ | Remarques |
|---|---|
| **Serveur** | Obligatoire. Le nom tel que le montre la lecture de l'architecture, ou le nom propre de la machine pour une machine ajoutée à la main. |
| **Rôle** | Dans la liste des rôles ; il détermine la configuration standard de ce qui reste vide. |
| **Processeurs (threads, vCPU)**, **Cœurs physiques** | L'un des deux suffit : l'autre en est déduit. |
| **Mémoire (Go)**, **Disque (Go)** | Vides quand ils ne sont pas connus. |
| **Note** | Facultative. |

L'onglet **Licences au processeur** contient ce dont le décompte des licences a besoin :

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsszl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsszl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsszl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsszl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="210" rx="14" fill="url(#nsszl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Taille des serveurs</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="78" fill="#64748b" fontSize="8.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TAILLE</text>
  <text x="298.116" y="78" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LICENCES AU PROCESSEUR</text>
  <line x1="298.116" y1="83" x2="423" y2="83" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FAMILLE DE PROCESSEUR</text>
  <rect x="240.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="123.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Intel Xeon, AMD EPYC / Opteron, puces de poste de travail — 0,5 ▾</text>
  <text x="608.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VIRTUALISATION</text>
  <rect x="608.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="123.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Machine virtuelle VMware ▾</text>
  <text x="240.0" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLUSTER</text>
  <rect x="240.0" y="153" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="167.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">PROD-CLUSTER</text>
  <line x1="220" y1="186" x2="980" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <rect x="900" y="194" width="60" height="22" rx="5" fill="url(#nsszl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="208.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="828" y="194" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.0" y="208.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Famille de processeur</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le facteur de cœur d'Oracle</text>
  <line x1="200" y1="113.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszl-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cluster</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même nom sur ses hôtes</text>
  <line x1="200" y1="177.0" x2="240" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszl-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Virtualisation</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = machine physique</text>
  <line x1="1000" y1="113.0" x2="960" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszl-arrow)"/>
</svg>

| Champ | Remarques |
|---|---|
| **Famille de processeur** | Tirée de la *Processor Core Factor Table* d'Oracle ; chaque choix indique son facteur. Vide, elle est lue comme Intel / AMD (0,5). |
| **Virtualisation** | Vide, elle est lue comme *Machine physique*. |
| **Cluster** | Pour une machine virtuelle : le cluster qui l'héberge. Pour un hôte physique de ce cluster : le même nom, avec le rôle *Hôte physique d'un cluster (hyperviseur)*. |

---

## Licences au processeur \{#processor-licences\}

Nomasx-1 lit ces lignes pour compter les licences d'un produit vendu au processeur — la base de données, Oracle Data Integrator, Oracle Analytics Server — sur les machines où il s'exécute, selon la règle d'Oracle :

- **cœurs × facteur de cœur** : les cœurs physiques de la machine (ses processeurs quand aucun cœur n'est renseigné) multipliés par le facteur de sa famille de processeur ; les cœurs sont additionnés avant l'application du facteur, et le résultat est arrondi une seule fois à l'entier supérieur ;
- **une partition matérielle** compte les cœurs attribués à la partition ;
- **une machine virtuelle qui n'est pas une partition matérielle** (*Machine virtuelle VMware*, *Autre machine virtuelle*) compte **tous les hôtes physiques de son cluster**, quelle que soit sa propre taille — les lignes de ce cluster dont le rôle est *Hôte physique d'un cluster (hyperviseur)*. Un cluster n'est compté qu'une fois, quel que soit le nombre de machines du produit qu'il héberge ;
- un cluster dont les hôtes ne sont pas renseignés ne peut pas être compté : Nomasx-1 le signale et retient les cœurs de la machine virtuelle comme minimum.

Ce décompte est une lecture des règles d'Oracle, une hypothèse à discuter — jamais une position certifiée. Voir les [pages de licences](../../nomasx1/licenses/odi.md#processors) de Nomasx-1.

---

## Accès \{#access\}

L'écran s'affiche pour les rôles qui détiennent son entrée de menu ; enregistrer une ligne demande le droit de la modifier (`edit:nomajde:server_sizes`), et **Lister les serveurs** les fonctions `plugin:nomajde.sizing:*`. Les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur** les détiennent (voir [Rôles prédéfinis](../overview.md#roles)).

---

## Conseils & bonnes pratiques \{#tips\}

- Lancer d'abord **Lister les serveurs**, puis saisir les tailles relevées dans la console de virtualisation ou sur le système : les noms correspondent alors à la lecture.
- Indiquer dans **Note** l'origine des chiffres (hyperviseur, inventaire, date) : un dimensionnement se discute sur ses sources.
- Ajouter le serveur de déploiement à la main : la lecture ne le voit pas, la cible OCI en compte un.
- Pour le serveur de base de données, laisser les tailles vides si la base est Oracle, SQL Server ou Db2 : ses propres chiffres sont repris.
- Derrière un cluster VMware, renseigner chaque hôte physique une fois, avec ses cœurs, sa famille de processeur, le rôle *Hôte physique d'un cluster (hyperviseur)* et le nom du cluster : sans eux, le décompte des licences n'est qu'un minimum.

---

## Voir aussi

- [Synthèse de la plateforme → Capacité](../synthesis.md#capacity) — chaque machine avec sa taille et l'origine de chaque chiffre.
- [Cible OCI](./oci-target.md) — la plateforme proposée sur Oracle Cloud Infrastructure à partir de ces tailles.
- [Architecture](./architecture.md) — les machines trouvées par la lecture.
- [Pages de licences](../../nomasx1/licenses/odi.md#processors) de Nomasx-1 — les licences au processeur comptées sur ces lignes.
