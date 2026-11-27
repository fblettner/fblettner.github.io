---
title: Security test cases
description: "The JD Edwards EnterpriseOne security tested as any other test in Nomajde (Tests → Cases, suite jde-security): each step asks one place of the security as it is — what a user or role may do on an application, whether a menu task is shown, whether a UDO is seen, what may be done on a table's column — with the line that decides; parameters picked in lists, five sample cases of a closed, separated security to adapt, and cases kept from Simulate Security."
keywords: [Nomajde, JD Edwards, JDE E1, security test cases, non-regression, jde-security, jde_security, Security Workbench, menu filtering, UDO security, column security, sample cases, Simulate Security, roles]
---

# Security test cases

The security test cases keep the non-regression of a JD Edwards EnterpriseOne security project. A case says what one user, role or `*PUBLIC` must be allowed and refused — *may run P0411*, *does not see the Supply Management menu*, *does not view the SSN column of F060116* — and playing it asks the security **as it is now**. After a change in the Security Workbench, a role merge or a promotion to another environment, a failed step says what no longer holds.

They are cases of the [tests](../tests.md) like any other: written, played and compared in **Tests → Cases**, in the suite **`jde-security`** (*JDE — who may do what*), with their results in **Tests → Results**. Playing a case only reads JD Edwards.

---

## At a glance

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="440" rx="14" fill="url(#njtc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="236" y="60" width="210" height="386" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="70" width="190" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="341.0" y="84.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New suite</text>
  <text x="248" y="112" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHO MAY DO WHAT</text>
  <rect x="242" y="122" width="198" height="20" rx="5" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="136" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="136" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable manager</text>
  <text x="250" y="160" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="160" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts receivable ma…</text>
  <text x="250" y="184" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="184" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Buyer</text>
  <text x="250" y="208" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="208" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Security administrator</text>
  <text x="250" y="232" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="232" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Everybody is closed by…</text>
  <text x="250" y="256" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="264" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">AP_MANAGER — month end</text>
  <text x="250" y="280" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ New case</text>
  <text x="250" y="304" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHAT MUST KEEP WORKING</text>
  <rect x="458" y="60" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="504.5" y="74.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run this case</text>
  <rect x="557" y="60" width="93" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="603.5" y="74.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run the suite</text>
  <rect x="458" y="90" width="250" height="356" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="478" y="102" width="210" height="22" rx="11" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="583.0" y="117" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sample — Accounts payable manager</text>
  <rect x="498" y="136" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="152" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ RIGHTS</text>
  <text x="510" y="168" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P0411</text>
  <line x1="583.0" y1="182" x2="583.0" y2="196" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="196" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="510" y="212" fill="#f87171" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✕ RIGHTS</text>
  <text x="510" y="228" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P4310</text>
  <line x1="583.0" y1="242" x2="583.0" y2="256" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="256" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="510" y="272" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ MENU</text>
  <text x="510" y="288" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Menu — Financials</text>
  <line x1="583.0" y1="302" x2="583.0" y2="316" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="316" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="332" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ UDO</text>
  <text x="510" y="348" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">WATCHLIST — Payments Ov…</text>
  <line x1="583.0" y1="362" x2="583.0" y2="376" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="376" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="510" y="392" fill="#f87171" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✕ COLUMN</text>
  <text x="510" y="408" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">F060116.SSN</text>
  <rect x="724" y="60" width="360" height="386" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738" y="82" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">The step</text>
  <text x="738" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME</text>
  <rect x="738" y="106" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="120.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Menu — Financials</text>
  <text x="890" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT CALLED</text>
  <rect x="890" y="106" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="900" y="120.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">menu  Whether a user or role is sho…  ▾</text>
  <text x="738" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMETERS</text>
  <rect x="738" y="152" width="332" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="170" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">User, role or &#42;PUBLIC</text>
  <rect x="748" y="175" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER  ×  ▾</text>
  <text x="910" y="170" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Task view</text>
  <rect x="910" y="175" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">91 EnterpriseOne Me…  ×  ▾</text>
  <text x="748" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Task</text>
  <rect x="748" y="219" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="233.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Financials  ×  ▾</text>
  <text x="910" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Folder</text>
  <rect x="910" y="219" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920" y="233.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="748" y="258" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">A menu or a task of the task view.</text>
  <text x="910" y="258" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Only when the task sits in several…</text>
  <text x="738" y="296" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">What is expected</text>
  <text x="738" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <rect x="738" y="322" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="336.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">must work  ▾</text>
  <text x="738" y="366" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">A VALUE OF THE RAW ANSWER EQUALS — PATH, VALUE</text>
  <rect x="738" y="372" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="386.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">shown</text>
  <rect x="896" y="372" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="906" y="386.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">Y</text>
  <rect x="738" y="415" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M740.5,420.5 L742.8,422.8 L746.8,418" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="755" y="424" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Played even after a failure (a cleanup)</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The suite jde-security</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">five samples, then your cases</text>
  <line x1="200" y1="117.0" x2="242" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kept from Simulate</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Keep as a test case…</text>
  <line x1="200" y1="277.0" x2="246" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A step per place asked</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rights · menu · udo · column</text>
  <line x1="200" y1="397.0" x2="498" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1140" y="150" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Picked in lists</text>
  <text x="1150" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">who, task view, task, folder</text>
  <line x1="1140" y1="167.0" x2="1070" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1140" y="370" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What must hold</text>
  <text x="1150" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown, seen, run… = Y or N</text>
  <line x1="1140" y1="387.0" x2="1070" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
</svg>

---

## The four security calls \{#endpoints\}

Each step of a security case calls one endpoint of the connector `jde_security` and expects values of its answer. Each answer is computed as JD Edwards decides it: a user is taken with the roles held today, then `*PUBLIC` (see [How it is decided](../reviews/simulate-security.md#rule)).

| Endpoint | What it asks | Parameters | Answer |
|---|---|---|---|
| **`rights`** — *What a user or role may do on an object* | An application, a form or a report | **User, role or \*PUBLIC**, **Object**, **Form** and **Version** (optional) | `run`, `add`, `change`, `delete`, each `Y` or `N`, and for each the line that decides (`run_by`…). |
| **`menu`** — *Whether a user or role is shown a menu task* | A menu or a task of a task view | **User, role or \*PUBLIC**, **Task view**, **Task**, **Folder** (optional) | `shown`, `Y` or `N`; `places` and `hidden_places` count where the task sits and where it is hidden. A task that sits in several folders is shown when one of its places is; **Folder** narrows the question to one of them. |
| **`udo`** — *Whether a user or role sees a UDO* | A user defined object | **User, role or \*PUBLIC**, **Kind of UDO**, **UDO** | `seen`, `Y` or `N`, its `name`, and `by`, the line that decides. |
| **`column`** — *What a user or role may do on a table's column* | A column of a table | **User, role or \*PUBLIC**, **Table**, **Column** (the data item, without the table's prefix) | `view`, `add`, `change`, each `Y` or `N`, and for each the line that decides (`view_by`…). A column no line names is allowed. |

---

## Parameters picked in lists \{#lists\}

No parameter of these endpoints needs to be typed: each is picked in a list — in the step of a case, in the HTTP runner, and anywhere the endpoint is called by hand. A long list opens as a table (**Open as a table**), with its columns and filters.

| Parameter | The list |
|---|---|
| **User, role or \*PUBLIC** | The users and roles of JD Edwards, and `*PUBLIC`, filtered by kind. |
| **Object**, **Table** | The objects of the Object Librarian, filtered by type. |
| **Task view** | The task views. |
| **Task**, **Folder** | The menus and tasks of the task view picked, each with the folder it sits in and the application it runs; the technical task identifier is not shown. |
| **Kind of UDO** | The kinds of user defined objects. |
| **UDO** | The UDOs of the kind picked, by name. |
| **Column** | The columns of the table picked. |

A list that depends on another parameter — the tasks of a task view, the UDOs of a kind, the columns of a table — waits for that parameter. A value that is not in the list can still be typed. The last four lists are lookups of the Nomajde dictionary: *Tasks of a task view*, *Kinds of UDO*, *UDOs of a kind*, *Columns of a table*.

---

## Writing a case \{#write\}

1. In **Tests → Cases**, pick the suite **JDE — who may do what** and choose **New case** — or **Case from an endpoint**, which prepares a first step from one of the four endpoints with what it answers now.
2. The **+** on the flow adds a step. **Endpoint called**: one of the four security endpoints. **Parameters**: who, then the object, the menu, the UDO or the column, each picked in its list.
3. **Fill from the answer** plays the call now and proposes what to expect. Under **What is expected**, **A value of the raw answer equals — path, value** holds the answers that must stay true: `run` = `Y`, `shown` = `N`, `seen` = `N`, `view` = `N`…
4. Tick **Played even after a failure (a cleanup)** on each step: every place is then asked, whatever the step before said.
5. **Save**, then **Run this case**.

One case per user or role, named after what the role is for, keeps a failure readable: it points at one role.

---

## A case kept from Simulate Security \{#from-simulate\}

In [Simulate Security](../reviews/simulate-security.md#keep), **Keep as a test case…** turns what the tabs list into a case of the suite `jde-security`, **as the security is today**: one step per application, menu task, UDO or column listed, with what it answers now as the expectation. A case of the same name is replaced.

The same dialog offers, once, to bring into the tests the security cases kept in Nomajde's own database (**Bring my n former case(s) into Tests**); its samples are left aside, the suite has its own.

---

## Sample cases \{#samples\}

The suite `jde-security` ships five sample cases of a **closed, separated security**, written on the roles, menus and watchlists JD Edwards delivers. They are a starting point: replace each role with one of yours, then adapt what is expected. On a system where the security is left open, they fail where it is open — which is what they are for.

| Sample | About | What it expects |
|---|---|---|
| **Accounts payable manager** | `APMGRJDE` | Enters vouchers (`P0411`: run, add) and manual payments (`P0413M`); no purchase orders (`P4310`), credit (`P03B11`) nor Security Workbench (`P00950`). Sees the Financials menu, not Supply Management nor the EnterpriseOne Life Cycle Tools; sees the *Payments Overdue* watchlist, not *Held Purchase Orders*; does not view `F060116.SSN`. |
| **Accounts receivable manager** | `ARMGRJDE` | Works the receivables (`P03B11`: run, add; `P03B102`); no vouchers nor payments, no Security Workbench. Sees Financials only; sees the *Credit Review Overdue* watchlist, not *Payments Overdue*; does not view `F060116.SSN`. |
| **Buyer** | `BUYERJDE` | Enters purchase orders (`P4310`: run, add); does not receive (`P4312`), enter vouchers nor pay; reads the supplier master (`P04012`) without adding, changing or deleting. Sees Supply Management only; sees *Held Purchase Orders*; does not view `F0030.CBNK` nor `F060116.SSN`. |
| **Security administrator** | `SYSADMIN` | Runs the security applications (`P00950` with every right, `P0092`, `P95921`); enters no voucher, makes no payment. Sees the EnterpriseOne Life Cycle Tools. |
| **Everybody is closed by default** | `*PUBLIC` | Nobody runs the security and OMW applications (`P00950`, `P0092`, `P95921`, `P98OWSEC`, `P98220`) nor `P0411` and `P4210`; the EnterpriseOne Life Cycle Tools and Development Utilities menus are hidden; the EnterpriseOne page is seen, *Payments Overdue* is not; `F060116.SSN` and `F0030.CBNK` are not viewed. |

---

## Playing the cases \{#play\}

**Run this case** plays the case open, **Run the suite** every case of `jde-security`; the flow marks each step passed or failed, and **Tests → Results** keeps the last runs of the suite. For an application, a UDO or a column, the answer of a failed step names the line that decides (`run_by`, `by`, `view_by`…): the fix goes to the right user, role or `*ALL` line.

---

## Access \{#access\}

The cases are in the **Tests** folder of the Nomajde menu (**Tests → Cases**, **Tests → Results**). Writing and playing them needs the test permissions of the platform (see [Tests](../tests.md#access)). **Keep as a test case…** is part of [Simulate Security](../reviews/simulate-security.md), held by the predefined roles **Security administrator** and **Administrator**; both also open the Tests and run the test job, so the cases kept there can be played and scheduled.

The connection used to read JD Edwards needs read access to the Security Workbench (`F00950`), the menu filtering (`F9006`) and menus (`F9000`, `F9001`), the UDO security (`F00950W`) and catalogue (`F9860W`), the profiles (`F0092`), the roles (`F00926`), the role assignments (`F95921`) and the Object Librarian (`F9860`).

---

## Tips & best practices \{#tips\}

- **Keep the refusals.** The expectations that matter most are often the `N`: a supplier master that a buyer must not change, a security application that nobody but the administrators may open, a column of personal data hidden from everybody.
- **Play the suite after every change** to the Security Workbench, after [Re-merge security](../jobs.md#remerge) and after a promotion of the security to another environment.
- **Start from the samples**: replace the delivered role with yours, adapt the objects to the applications really used, then add what is specific to the business.
- **Keep a case from Simulate Security** once a change is applied: the new security becomes what is expected.
