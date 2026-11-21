---
title: Create from… — endpoints and screens from JD Edwards
description: "Create from… on the Nomajde AIS connector: pick a JD Edwards application, form, table, report version, business function or orchestration, answer a few questions, and get a ready endpoint with one labelled field per input — or a whole Liberty screen that reads a JDE form and adds, changes and deletes records through it, with JD Edwards' own rules."
keywords: [Nomajde, JD Edwards, AIS, Create from, form service, P01012, Address Book, UDC, screen from a JDE form, business function, orchestration, report version, data service, no code]
---

# Create from… — endpoints and screens from JD Edwards

**Create from…** writes, from what JD Edwards itself describes, an endpoint dedicated to **one** object — one report version, one table, one form, one business function, one orchestration — or a complete **screen on a JD Edwards application**. Nobody types a path or a JSON body: the object is searched by name, a few questions are answered, and each input becomes a labelled field with its help and its default.

It is the short way to put a JD Edwards form in a Nomajde grid, with saves that go through the form — so JD Edwards' own rules, defaults, security and messages apply.

Access: **Liberty Next → Data → Connectors**, connector `ais_connection`, tab **Endpoints**, button **Create from…**.

---

## At a glance

<svg viewBox="0 0 1200 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="358" rx="14" fill="url(#cfr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Create an endpoint from the server</text>
  <rect x="240" y="60" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="74.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">A JDE application (its list and its record) ▾</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIND</text>
  <rect x="240" y="110" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">address book</text>
  <rect x="496" y="110" width="55" height="22" rx="5" fill="url(#cfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="523.5" y="124.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Search</text>
  <text x="240" y="150" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 found — pick one</text>
  <rect x="240" y="158" width="330" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="172.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="316" y="172.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book</text>
  <rect x="240" y="184" width="330" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="316" y="198.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <rect x="240" y="210" width="330" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">P01111</text>
  <text x="316" y="224.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book - Who's Who</text>
  <rect x="240" y="244" width="330" height="62" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="262" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P01012 — Address Book.</text>
  <text x="252" y="278" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Its list is W01012B (Work With Addresses, 9 columns);</text>
  <text x="252" y="292" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">a record is edited in W01012A (Address Book Revision).</text>
  <rect x="592" y="60" width="368" height="300" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="606" y="82" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT TO CREATE</text>
  <rect x="606" y="88" width="340" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="102.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The endpoints and a screen on them ▾</text>
  <text x="606" y="132" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IDENTIFIES A RECORD</text>
  <rect x="606" y="141" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,146.5 L610.8,148.8 L614.8,144" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AN8</text>
  <rect x="652.12" y="141" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="669.12" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ALPH</text>
  <rect x="703.28" y="141" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="720.28" y="150" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AT1</text>
  <text x="606" y="178" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE FIELDS A RECORD IS EDITED WITH</text>
  <rect x="606" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,192.5 L610.8,194.8 L614.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ALPH</text>
  <rect x="690" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M692.5,192.5 L694.8,194.8 L698.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="707" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">AT1</text>
  <rect x="774" y="187" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M776.5,192.5 L778.8,194.8 L782.8,190" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="791" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">TAX</text>
  <rect x="858" y="187" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="875" y="196" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">MLNM</text>
  <rect x="606" y="207" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M608.5,212.5 L610.8,214.8 L614.8,210" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="623" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ADD1</text>
  <rect x="690" y="207" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M692.5,212.5 L694.8,214.8 L698.8,210" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="707" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">CTY1</text>
  <rect x="774" y="207" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="791" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ADDZ</text>
  <rect x="858" y="207" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="875" y="216" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">PH1</text>
  <text x="606" y="248" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION OF THE APPLICATION</text>
  <rect x="606" y="254" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616" y="268.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <rect x="782" y="324" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="808.5" y="338.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="850" y="324" width="112" height="22" rx="5" fill="url(#cfr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="906.0" y="338.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Create the screen</text>
  <text x="240" y="332" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">Then: application, screen id, title,</text>
  <text x="240" y="346" fill="#94a3b8" fontSize="8.8" fontFamily="system-ui, sans-serif">add it to the menu — created in one pass.</text>
  <rect x="20" y="50" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Create from</text>
  <text x="30" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, form, table, report…</text>
  <line x1="200" y1="67.0" x2="240" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">1 · Find</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by name or description</text>
  <line x1="200" y1="147.0" x2="240" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What was found</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the list and the edit form</text>
  <line x1="200" y1="267.0" x2="240" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">2 · Answer</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what an operator knows</text>
  <line x1="1000" y1="77.0" x2="946" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The key</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">found before any change</text>
  <line x1="1000" y1="177.0" x2="772" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
  <rect x="1000" y="310" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="325" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 · Create</text>
  <text x="1010" y="338" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">endpoints and screen together</text>
  <line x1="1000" y1="327.0" x2="962" y2="335" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfr-arrow)"/>
</svg>

---

## The three steps \{#steps\}

1. **Find** — choose what to create from, type a name or part of a description, and pick the object in the results.
2. **Answer** — the questions depend on the object: the columns to return, the fields to fill, the button pressed. AIS describes the object without running it on data.
3. **Create** — the endpoint is added to the connector, unsaved and open for review: rename it, adjust a label, then save the connector. When a screen is asked for, a second dialog asks for the application, the screen identifier, its title and whether to add it to the menu, and everything is created and saved together.

Each endpoint created has its own permission and sits under the heading of its JD Edwards application (`P01012 — Address Book`).

---

## What can be created \{#generators\}

| Create from | Type to search | What is built |
|---|---|---|
| **A JDE application (its list and its record)** | An application (`P01012`) or part of its description (*address*). | The endpoints that read, add, change and delete a record — and a screen on them. |
| **A report version** | The beginning of a report's name (`R0010…`). | An endpoint that submits that version. |
| **A table or a business view** | Part of a name or of a description. | An endpoint that reads it. |
| **A JDE form** | An application, a form (`W01012B`) or part of a form's description. | An endpoint that uses that form — or a screen on it. |
| **A business function** | A function name, a source object (`B0000130`) or part of a description. | An endpoint that runs it. |
| **An orchestration** | Part of a name, of a description or of a category. | An endpoint that runs it. |

---

## A JDE application — the easy way \{#application\}

This is the one to start with. It asks what an operator knows, and finds the rest: the application's **list** (its find / browse form) and the **form a record is edited in**.

| Question | Meaning |
|---|---|
| **What to create** | *The endpoints and a screen on them* (the default), or *The endpoints only (read, add, change, delete)*. |
| **What identifies a record** | The column(s) of the list a record is found by before it is changed or deleted. The first column is proposed. |
| **The fields a record is edited with** | Proposed: the fields the list shows. Tick the others to fill — each becomes a field of the add and of the change. |
| **The list's own fields when it looks for a record** | Only when the list does not find a record by its key alone: a fixed value per field, by alias (`AT1=*` — every search type). Usually blank. |
| **Version of the application** | `ZJDE0001` by default. |

The dialog says what it found — the list, its number of columns, the form a record is edited in — and warns when the list shows nothing without a filter on the JD Edwards in use: the screen will then ask for one.

The screen created reads the list in a grid and opens a row in a **record form**: the same columns, the key locked once the record exists, a column no save carries shown but not typed.

---

## A report version \{#report\}

| Question | Meaning |
|---|---|
| **Processing options to fill** | Each one becomes a field, with the version's current value as its default. The others keep the version's value. |
| **Columns to select on** | Each one becomes a required field, compared with *equal* and **added** to the version's saved selection, which is kept. |

The endpoint — *Submit R0010P / XJDE0001* — is marked as changing data.

---

## A table or a business view \{#data\}

| Question | Meaning |
|---|---|
| **Columns to return** | None chosen = every column. |
| **Columns to filter on** | Each one becomes a required field: the rows whose column equals the value. |
| **Maximum rows** | `100` by default. |

The endpoint says where its rows are: a screen can use it as its source, the columns named by their JD Edwards alias so that the dictionary gives their labels.

---

## A JDE form \{#form\}

The complete generator, for a form the easy way does not cover. AIS describes the form — its fields, its grid columns, its buttons.

| Question | Meaning |
|---|---|
| **What to create** | *One endpoint (as set below)*, or *A screen on this form: its rows in a Liberty grid, and the endpoints it needs*. |
| **A screen: the columns that identify a row (its key)** | Needed for the screen to save. None chosen = a screen that only reads. |
| **Values passed by the calling form** | For a form opened from another one with greyed fields: the numbers of those values and a name for each — `1=Product_Code, 2=UDC_Type`. Without them such a form saves wrong data. |
| **Fields and grid filters to fill** | Each one becomes a field. A grid filter left blank does not filter, and accepts `A*`, `>`… |
| **What is done to a row of the grid** | *Add a row*, *Change the row the grid filters find*, *Delete the row the grid filters find*. |
| **Find the row with a leading \*** | For codes stored right-justified, like a UDC code: `002` is found as `*002`. |
| **A record is edited in** | *This form's grid*, or another form of the application — Work With Addresses lists, Address Book Revision edits. |
| **Edited in another form: when JDE warns** | *Save all the same (OK is pressed again) and report the warning*, or *Save nothing: the warning is the error*. |
| **Button pressed** | *Find* reads. Any other button does what the form does — OK saves, Delete deletes — and the endpoint is marked as changing data. |
| **Fields and columns to return** | None chosen = all of them. |

### The guarantees of a save \{#guarantees\}

A change or a delete through a form is several actions in **one JD Edwards session**: find the row, check what was found, act, press OK.

- Nothing is done unless **exactly one** row is found — none, for an add.
- A record edited in another form goes the user's way: found in the list, the list's own button pressed (Select, Add, Delete), the other form filled and its OK pressed.
- A warning stops the first OK as it does for a user; it is accepted or refused according to the choice above, and reported with the save.
- After a delete the record is looked for again: a form that deleted nothing is an error.
- A field the screen does not send is **not typed** in the form; a field the user cleared is.
- When the form refuses — a required field left blank, a value it does not accept — the save fails with the form's own message.
- The forms and the session are always closed, an error included: no JD Edwards session and no record lock are left behind.

---

## A business function, an orchestration \{#bsfn\}

| Create from | Questions | Result |
|---|---|---|
| **A business function** | **Parameters to pass** (each becomes a field; the others are left to the function) and **Parameters to return**. | *Run &lt;function&gt;* — an error fails the call with its message, a warning is reported and the call stands. |
| **An orchestration** | None: the dialog lists its inputs. | *Run &lt;orchestration&gt;* — one field per input, on the address of its version; an input that is a list of rows stays one JSON field, with the rows' shape as its example. |

---

## An SQL screen saved through the forms \{#saves-through\}

A screen that reads a JD Edwards table by SQL — fast, every column, paging — can keep its read and **save through the forms**: in the screen designer, **Saves through** names the AIS connector, and the update, insert and delete are the record endpoints created above. A field of the endpoint takes the value of the column that carries the same data item (`ALPH` from `ABALPH`): nothing to map by hand. See [A screen on an API endpoint](../../framework/build/screens/api-screens.md#saves-through).

---

## Keeping endpoints up to date \{#refresh\}

An endpoint remembers what it was created from. When the report, the table, the form or the orchestration changes in JD Edwards — after an update, for instance:

- **Refresh from the server**, on the endpoint, builds it again and shows what changes before applying it; the name, the label and what was written on its fields are kept.
- **Check N generated**, above the list, asks JD Edwards for every generated endpoint and lists those that no longer match.

---

## Tips & best practices \{#tips\}

- Start with **A JDE application**; go to **A JDE form** only for a header-detail form, a form opened with greyed values, or a specific button.
- Try the read endpoint in the **Test** tab before creating the screen: an empty list there is an empty screen later.
- For a UDC-like form, name the **values passed by the calling form**: typed in the fields instead, the form saves a blank code.
- Give the endpoints that change JD Edwards to the roles that may do the same thing in JD Edwards — no more.
- Add a [non-regression case](../tests.md) on each generated endpoint the business depends on.
- The AI assistant knows the procedure: ask it to *create a Liberty screen on a JDE form*.

---

## Related

- [JD Edwards services (AIS)](./services.md) — the catalogue.
- [API endpoints](../../framework/build/api-endpoints.md) and [A screen on an API endpoint](../../framework/build/screens/api-screens.md) — the framework side.
