---
title: How a contract is counted
description: "How the Nomasx-1 Licensing review reads an Oracle contract for JD Edwards: who is counted, how a user is placed on bundles and module lines, revenue, employee and processor lines, Oracle's core factor and VMware clusters, Named User Plus on a database, components included in another, modules no line covers. An assumption at public list prices, never a certified position."
keywords: [Nomasx-1, licensing review, Oracle contract, bundle, Application User, Enterprise $M, employees, processor licence, core factor, VMware cluster, Named User Plus, minimum per processor, Technology Foundation, JD Edwards]
---

# How a contract is counted

The [Licensing review](./licensing-review.md), its PDF, the [licence audit report](./reports/audit-licences.md) and the AI assistant read a contract the same way. This page gives the rules: who is counted, how each user is placed on the lines of the contracts, and how the lines that are not seats are compared.

It is a reading of the contract and of Oracle's public rules applied to what was collected — **an assumption, never a certified position**. Only Oracle can state a licence position.

---

## The lines of a contract \{#lines\}

A contract ([CSI](./licenses/csi.md)) covers one or several applications. Its lines are of two sorts:

- **a component alone** (*Components* tab): one module, a metric and a quantity;
- **a bundle** (*Bundles* and *Bundle components* tabs): a name, a metric, a quantity and the modules it holds.

The **metric** says how a line is counted ([Metrics](./settings/pricing/metrics.md)):

| Metric | Counted as |
|---|---|
| **Application User**, **Named User Plus** on an application module | Seats: a number of people. |
| **Named User Plus** on a technology product (a database, its options and packs) | A count, not seats — see [Named User Plus on a database](#named). |
| **Enterprise $M** | The company's revenue, in millions. |
| **Employee** | The company's employees. |
| **Processor** | The processors of the machines the product runs on. |
| Any other (concurrent user, expense report, stream…) | Not counted: the line covers its modules and nothing is compared. The page lists it. |

A line on Oracle Data Integrator or Oracle Analytics Server is left to the questionnaire of its own page ([Oracle Data Integrator](./licenses/odi.md), [Oracle Analytics Server](./licenses/analytics-server.md)), never compared with the JD Edwards users or the database servers.

---

## Who is counted \{#who\}

- **Enabled users only.** A disabled account counts for nothing.
- **Never a technical or linked account** — the *Technical (Y/N)* and *Is Linked (Y/N)* flags of [Users properties](./settings/security/users-properties.md).
- **On the modules they used**, when Object Usage Tracking has data for the application: each object a user ran belongs to a module through its system code ([System Code](./settings/jde/system-code.md), with the [reclassifications](./settings/jde/reclassification.md)).
- **Otherwise, on the modules their security allows**, and only for the users who signed in within the application's period: the field *Signed in within (days) = a user* of [Applications](./settings/global/applications.md), 90 days when empty. A user who has not signed in within the period counts for nothing.

The page and the PDF say which of the two was applied.

---

## How one user is placed \{#placing\}

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lrc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lrc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lrc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lrc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#lrc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">How one user is placed</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The modules the user needs, then each line in turn — users with the least choice first.</text>
  <rect x="250" y="84" width="300" height="40" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="400.0" y="101.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Modules needed</text>
  <text x="400.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">used (Object Usage Tracking), else allowed</text>
  <line x1="400.0" y1="124" x2="400.0" y2="142" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="142" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="159.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Revenue or employee line</text>
  <text x="400.0" y="174.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">covers its modules for everybody: no seat</text>
  <line x1="400.0" y1="182" x2="400.0" y2="200" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="200" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="217.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · The bundle that covers the most</text>
  <text x="400.0" y="232.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">equal: the smaller one, then the contract's order</text>
  <line x1="400.0" y1="240" x2="400.0" y2="258" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="258" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="400.0" y="275.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Full? the next line that fits</text>
  <text x="400.0" y="290.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">another bundle, or the module's own line</text>
  <line x1="400.0" y1="298" x2="400.0" y2="316" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#lrc-flow)"/>
  <rect x="250" y="316" width="300" height="40" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="400.0" y="333.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Nothing left: a missing seat</text>
  <text x="400.0" y="348.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">on that module, priced at list price</text>
  <rect x="620" y="84" width="300" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="770.0" y="101.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A module no line covers</text>
  <text x="770.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">kept apart: one Application User each</text>
  <line x1="550" y1="104" x2="620" y2="104" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#lrc-flow)"/>
  <rect x="620" y="200" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="770.0" y="217.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A component that includes others</text>
  <text x="770.0" y="232.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">its line covers them too (Technology Foundation)</text>
  <rect x="620" y="258" width="300" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="770.0" y="275.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A technology line per Named User Plus</text>
  <text x="770.0" y="290.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">a count, not seats: never below the minimum</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Who is counted</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">enabled, not technical, not linked</text>
  <line x1="200" y1="107.0" x2="250" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Smaller bundle first</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a large one is kept for who needs it</text>
  <line x1="200" y1="227.0" x2="250" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
  <rect x="1000" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Not covered</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a risk to negotiate</text>
  <line x1="1000" y1="107.0" x2="920" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lrc-arrow)"/>
</svg>

For each user, the modules they need, then:

1. **A revenue or employee line covers its modules for everybody**: those modules need no seat.
2. For what is left, **the bundle that covers the most of it** with a seat free. Between two that cover as much, **the smaller one** — someone who only needs Inventory and Sales goes to the *Inventory + Sales* bundle before the larger one that also holds Procurement and Planning — then the order of the contract.
3. **A full line is passed over**: the next one that fits is tried — another bundle, or the line of the module alone.
4. **What no line with room covers is a missing seat** on that module.
5. **A module that no line of the contracts covers at all** is kept apart, with the people who need it: an audit would count one *Application User* each. A risk to negotiate — a line to add, a bundle to extend — not a fact.

A user on a bundle is counted **once** for all its modules. The users with the least choice are placed first — those only one line fits, then those who need the most modules — so that a large bundle is not filled by people a smaller one would have taken. The same data always gives the same answer.

### A component that includes others \{#includes\}

A component may **include** others ([Components included](./settings/pricing/components-included.md)): Oracle Technology Foundation for JD Edwards EnterpriseOne includes *JD Edwards EnterpriseOne Core Tools and Infrastructure* and *Oracle Standard Edition 2*. A line on it, alone or in a bundle, covers what it includes: the users of Core Tools are seated on the Technology Foundation line, and beyond its quantity they are missing seats.

---

## Revenue and employees \{#revenue\}

A line in **Enterprise $M** covers its modules for every user. What is compared is the revenue the customer declares for the contract — *Revenue declared (millions)*, the latest date of the **Declared figures** tab — with the revenue subscribed. A line in **Employee** is compared with the employees declared there, else with the employees collected from JD Edwards.

One figure per contract and metric: when several lines of a contract are counted on the revenue, the subscription is the largest of their quantities. A figure that is not declared shows *not declared*.

---

## Processors \{#processors\}

A line per **Processor** on the database is compared with the processor licences its servers need, after Oracle's rule:

- the **cores × the core factor of the chip** (Oracle's *Processor Core Factor Table*: 0.5 for Intel and AMD, 1 for IBM POWER6 and later…). The cores of all the machines are added up before the factor is applied, and the result is rounded up once;
- a **hardware partition** (LPAR, capped zone, pinned Oracle VM) counts the cores given to the partition;
- a **virtual machine that is not a hardware partition** (VMware and the like) counts **every physical host of its cluster**, whatever its own size. A cluster is counted once, however many machines of the product run on it.

The machines, their processor family, their virtualisation and their cluster are stated in Nomajde's [Server sizes](../nomajde/monitoring/server-sizes.md); the database servers are those whose role carries a database, the hosts of a cluster those with the role *Physical host of a cluster (hypervisor)*. With no server stated, the reading takes the CPU count the database gave at its collection, read as x86. A cluster whose hosts are not stated, or a server with no size, makes the figure **a floor**, and the page says so.

---

## Named User Plus on a database \{#named\}

A database, its options and its management packs licensed per **Named User Plus** are not counted seat by seat: JD Edwards signs in to the database with one account, so nobody "uses" them in Object Usage Tracking. The line is compared with a **count**:

> the enabled JD Edwards users of the contract's applications (technical and linked accounts left out)
> \+ the open accounts of the database that are not Oracle's own
> \+ the users declared for the other applications of the contract (**Users of other applications** tab)

— and never below **the minimum per processor** of the price list × the processors of the database servers: 25 per processor for the Enterprise Edition database, whose options and packs follow the same minimum. The minimum is the *Minimum* column of [Pricing](./settings/pricing/pricing.md).

The database's own accounts are read with its properties at the database collection. Until that collection has run, every open account is counted, Oracle's own included, and the page says so.

What exceeds the subscription is priced in the *Financial risk* tab at the Named User Plus list price with three years of support.

---

## The amounts \{#amounts\}

| Gap | Estimate |
|---|---|
| A missing seat, a user on a module no line covers | One *Application User*: list price + 3 × yearly support of the module. |
| Named User Plus beyond the subscription | Each one: list price + 3 × yearly support of the database, option or pack. |
| Data Integrator, Analytics Server | The amounts of their findings. |
| Revenue, employees, processors beyond the subscription | Not priced: signalled on the page. |

The prices are those of [Pricing](./settings/pricing/pricing.md); a module with no price adds nothing and says *no price*.
