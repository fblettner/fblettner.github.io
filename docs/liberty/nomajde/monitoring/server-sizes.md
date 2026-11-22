---
title: Server sizes
description: "Monitoring → Server sizes in Nomajde: one line per machine of the JD Edwards EnterpriseOne platform — processors, physical cores, memory, disk and a note — stated by you, never collected on the machines. List the servers adds a line per machine found; what is left empty is measured by the database or taken from Oracle's published minimum on OCI. Feeds Platform synthesis and the OCI target."
keywords: [Nomajde, JD Edwards, JDE E1, server sizes, sizing, capacity, processors, vCPU, physical cores, memory, disk, Oracle Cloud Infrastructure, OCI, standard configuration, deployment server]
---

# Server sizes

**Monitoring → Server sizes** holds the size of each machine of the JD Edwards EnterpriseOne platform: its processors, physical cores, memory and disk. Nothing is collected on the machines — Server Manager says what a server *uses*, not how large the machine is — so the size is **stated**, one line per machine. What is left empty is filled from what the database says of its own server, else from a **standard configuration**.

These sizes are what the [Capacity](../synthesis.md#capacity) and [Improvements](../synthesis.md#improvements) tabs of Platform synthesis read, and what the [OCI target](./oci-target.md) sizes production from.

---

## At a glance

<svg viewBox="0 0 1200 306" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nssz-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nssz-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nssz-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nssz-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="268" rx="14" fill="url(#nssz-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Server sizes</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The size of each server, as you know it: what is left empty is measured or standard.</text>
  <rect x="240" y="78" width="67" height="22" rx="5" fill="url(#nssz-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="273.5" y="92.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add row</text>
  <rect x="315" y="78" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="348.5" y="92.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Bulk edit</text>
  <rect x="390" y="78" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="446.0" y="92.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚡ List the servers</text>
  <rect x="240" y="112" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER</text>
  <text x="354" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <text x="494" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS</text>
  <text x="578" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PHYSICAL CORES</text>
  <text x="678" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEMORY (GB)</text>
  <text x="758" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DISK (GB)</text>
  <text x="828" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTE</text>
  <text x="900" y="129.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHANGED BY</text>
  <rect x="240" y="144" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEDB01</text>
  <text x="354" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Database server</text>
  <text x="494" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="578" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="678" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="758" y="159.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="828" y="159.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="900" y="159.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="172" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <text x="354" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Enterprise server</text>
  <text x="494" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">16</text>
  <text x="578" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">8</text>
  <text x="678" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">64</text>
  <text x="758" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">300</text>
  <text x="828" y="187.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">VM, 2025</text>
  <text x="900" y="187.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="200" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="354" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Web and AIS server</text>
  <text x="494" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">8</text>
  <text x="578" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">4</text>
  <text x="678" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">32</text>
  <text x="758" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="828" y="215.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="900" y="215.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <rect x="240" y="228" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEDEP01</text>
  <text x="354" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Deployment server</text>
  <text x="494" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">4</text>
  <text x="578" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">2</text>
  <text x="678" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">16</text>
  <text x="758" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">250</text>
  <text x="828" y="243.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">added by hand</text>
  <text x="900" y="243.5" fill="#64748b" fontSize="8.8" fontFamily="system-ui, sans-serif">JSMITH</text>
  <text x="240" y="272" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">An empty cell: the database's own figure for its server, else the standard configuration of the role.</text>
  <rect x="1000" y="56" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">List the servers</text>
  <text x="1010" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a line per machine found</text>
  <line x1="1000" y1="73.0" x2="502" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per machine</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its name and its role</text>
  <line x1="200" y1="167.0" x2="250" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="20" y="238" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="253" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Added by hand</text>
  <text x="30" y="266" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a machine the reading misses</text>
  <line x1="200" y1="255.0" x2="250" y2="249" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Left empty</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">measured, else standard</text>
  <line x1="1000" y1="137.0" x2="550" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
  <rect x="1000" y="196" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stated figures</text>
  <text x="1010" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">always win, field by field</text>
  <line x1="1000" y1="213.0" x2="690" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nssz-arrow)"/>
</svg>

---

## The grid \{#grid\}

| Column | Content |
|---|---|
| **Server** | The machine's name. It is matched with the names the [Architecture](./architecture.md) reading finds without the case, the DNS domain or a port: `JDEENT01.example.com`, `jdeent01` and `jdeent01:6017` are one machine. |
| **Role** | *Database server*, *Enterprise server*, *Web and AIS server*, *Deployment server*, *Several roles on one machine* or *Other*. |
| **Processors (threads, vCPU)** | What the system counts as processors. |
| **Physical cores** | The cores of the machine. |
| **Memory (GB)** | The machine's memory. |
| **Disk (GB)** | The machine's disk. |
| **Note** | Free text — where the figures come from, for example. |
| **Changed by**, **Changed on** | Who saved the line last, and when. Read-only. |

**Add row** adds a machine by hand; the grid's usual tools — **Bulk edit**, filters, export — apply.

---

## List the servers \{#list\}

**List the servers** adds a line for each machine the architecture reading finds that has none yet, with its name and its role; the sizes are left for you to type. A line that exists is never changed, so the action can be run again after a new server is installed.

A machine the reading does not show — a deployment server, typically — is added by hand with **Add row**, with its role. It then counts with the others, marked *stated only — the architecture reading does not show it* in Platform synthesis.

---

## Where each figure comes from \{#origin\}

Each figure is taken, field by field, from the first source that has it:

| Origin | Where it comes from |
|---|---|
| **stated** | The value typed in this grid. A stated value always wins. |
| **measured by the database** | For the database server only: the processors, cores and memory the Oracle database reports of its own host. |
| **standard configuration** | Oracle's published minimum for JD Edwards EnterpriseOne 9.2 on Oracle Cloud Infrastructure (One-Click Provisioning), per role the machine carries: 2 cores and 30 GB per server; the disk by role — 50 GB for the database, 75 GB for an enterprise server, 20 GB for a web or AIS server, 30 GB more for the application server, 100 GB for Server Manager, 210 GB for a deployment server. |
| **counted from the other figure** | When only one of processors and cores is known, the other follows it — two processors per core. |

A machine that carries several roles adds up the standard of each role it carries. The **Role** column says what a machine carries when the reading does not show it; *Several roles on one machine* keeps what the reading found.

The standard configuration is a floor to start from, not a sizing: Platform synthesis and the OCI target say how many machines still rest on it.

---

## Edit dialog \{#edit\}

A double click on a line, or **Add row**, opens the form, one tab **Size** in two columns.

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsszd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsszd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsszd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsszd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="282" rx="14" fill="url(#nsszd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">New · Server sizes</text>
  <line x1="220" y1="60" x2="980" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="78" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SIZE</text>
  <line x1="240" y1="83" x2="280" y2="83" stroke="#4a9eff" strokeWidth="2"/>
  <text x="240.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVER (REQUIRED)</text>
  <rect x="240.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="123.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">JDEENT01</text>
  <text x="608.0" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROLE</text>
  <rect x="608.0" y="109" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="123.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Enterprise server ▾</text>
  <text x="240.0" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSORS (THREADS, VCPU)</text>
  <rect x="240.0" y="153" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="167.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">16</text>
  <text x="608.0" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PHYSICAL CORES</text>
  <rect x="608.0" y="153" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="167.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">8</text>
  <text x="240.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MEMORY (GB)</text>
  <rect x="240.0" y="197" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="211.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">64</text>
  <text x="608.0" y="192" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DISK (GB)</text>
  <rect x="608.0" y="197" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618.0" y="211.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">300</text>
  <text x="240.0" y="236" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="240.0" y="241" width="352.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250.0" y="255.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">VM, 2025</text>
  <line x1="220" y1="258" x2="980" y2="258" stroke="#1f2937" strokeWidth="1"/>
  <rect x="900" y="266" width="60" height="22" rx="5" fill="url(#nsszd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="930.0" y="280.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="828" y="266" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.0" y="280.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its name, matched to the reading</text>
  <line x1="200" y1="113.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Processors · cores</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one given, the other follows</text>
  <line x1="200" y1="167.0" x2="240" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Note</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">where the figure comes from</text>
  <line x1="200" y1="247.0" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Role</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sets the standard configuration</text>
  <line x1="1000" y1="113.0" x2="960" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Memory · disk</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">in GB; empty = not known</text>
  <line x1="1000" y1="207.0" x2="960" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsszd-arrow)"/>
</svg>

| Field | Notes |
|---|---|
| **Server** | Required. The name as the architecture reading shows it, or the machine's own name for a machine added by hand. |
| **Role** | From the list of roles; it decides the standard configuration of what is left empty. |
| **Processors (threads, vCPU)**, **Physical cores** | One of the two is enough: the other is counted from it. |
| **Memory (GB)**, **Disk (GB)** | Empty when not known. |
| **Note** | Optional. |

---

## Access \{#access\}

The screen shows to the roles that hold its menu entry; saving a line needs the right to change it (`edit:nomajde:server_sizes`), and **List the servers** the functions `plugin:nomajde.sizing:*`. The predefined roles **Platform operator** and **Administrator** hold them (see [Predefined roles](../overview.md#roles)).

---

## Tips & best practices \{#tips\}

- Run **List the servers** first, then type the sizes from the virtualisation console or the system: the names then match the reading.
- Write in **Note** where the figures come from (the hypervisor, an inventory, a date): a sizing is discussed on its sources.
- Add the deployment server by hand: the reading does not see it, the OCI target counts one.
- For the database server, leave the line empty if the database is Oracle: its own figures are taken.

---

## Related

- [Platform synthesis → Capacity](../synthesis.md#capacity) — every machine with its size and the origin of each figure.
- [OCI target](./oci-target.md) — the platform proposed on Oracle Cloud Infrastructure from these sizes.
- [Architecture](./architecture.md) — the machines the reading finds.
