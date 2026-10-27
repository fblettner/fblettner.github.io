---
title: Analyse data
description: "Using the Liberty Next Data Explorer: the fields pane, the Rows, Measures and Filters shelves, the period, Top N, the table, pivot, bar, line, pie and KPI views, the detail view, the drill to the rows behind a figure and the record dialog."
keywords: [Liberty Next, Data Explorer, analysis, fields pane, shelves, rows, measures, filters, period, pivot, chart, KPI, detail, drill]
---

# Analyse data

The explorer opens from the **compass** in the header. The model picker at the top right switches between the models available; picking an app in the left navigation opens that app's model.

The analysis runs on its own a moment after each change; **Run** runs it again on demand.

---

## Fields pane \{#fields\}

The left pane lists the model's entities — the analysed one opened, the others folded — with their **1..1** or **1..n** badge. In each entity, the dimensions come first, then the **Σ Measures**. The search box filters the fields of every entity.

| Action | Result |
|---|---|
| Click a field | A dimension goes to **Rows**, a measure to **Measures**. |
| Funnel on a field | The field goes to **Filters**. |
| Drag a field | Drops it on the shelf of choice. |
| Double-click an entity | Makes it the **analysed entity** — the one the analysis starts from (the hub by default). The selector at the left of the toolbar does the same. |

Fields already in use are highlighted. **New calculated field**, at the bottom of the pane, opens the [calculated-field editor](./calculated-fields.md).

---

## Shelves \{#shelves\}

| Shelf | Content |
|---|---|
| **Rows** | The dimensions to group by. A date gets a grouping: *Exact value*, *Day*, *Week*, *Month* (the default), *Quarter*, *Year*. In the detail view, this shelf lists the columns shown. |
| **Measures** | One aggregate per chip: *Sum*, *Average*, *Min*, *Max*, *Count*, *Distinct count* for a number; *Count* or *Distinct count* otherwise. **+** adds a row count. A dimension dropped here counts its distinct values. |
| **Filters** | A field, an operator, a value. Text: *contains*, `=`, `≠`, *starts with*, *ends with*, *in*, *is empty*, *is not empty*. Numbers and dates: `=`, `≠`, *between*, `<`, `≤`, `>`, `≥`, *in*, *is empty*, *is not empty*. A field with a list of values offers its values; *in* takes a comma-separated list. |

Chips move by drag within a shelf; the cross removes one. A filter value applies on **Enter** or when leaving the field.

---

## Period and Top N \{#period\}

The **Period** bar appears when the analysed entity has a date field: pick the date field (the entity's default date first), then a preset — *Today*, *Yesterday*, *Last 7 days*, *Last 30 days*, *This month*, *Last month*, *This quarter*, *This year*, *Last year*, *Last 12 months* — or a custom range on the calendar. *All dates* removes the period.

**Top** keeps the first N groups (up to 10,000). The note in the toolbar reads *N group(s) from M row(s)*, and says when the list was cut or when the figures are partial.

---

## Views \{#views\}

The buttons of the toolbar switch the view without running the query again.

| View | Shows |
|---|---|
| **Table** | One row per group, sortable by header. A click on a row drills to its rows. |
| **Pivot** | The rows as a collapsible hierarchy with subtotals, one dimension spread as **Columns** (*Automatic*: the last one), a grand total, and a **Share** — *of parent* or *of total* — beside each value. Subtotals appear only for a sum or a count: a sum of averages means nothing. Toolbar: expand all, collapse all, Excel export. A click on a value drills. |
| **Bars**, **Lines** | The first dimension on the x axis, the second one (or the measures) as **Series**; the top 10 series, the rest folded into *Others*; dates in order, other categories by value; **Stacked** option. |
| **Pie** | The first dimension as slices, top 10 plus *Others*. |
| **KPI** | One card per measure with its total. |
| **Detail** | The rows themselves, 50 per page, with the **Rows** shelf as columns (the analysed entity's fields when empty). |

**Measure** picks the measure of the pivot or the chart (the first one by default).

---

## Drill and record \{#drill\}

A click on a group of the table or on a value of the pivot lists the **rows behind that figure**: the key, the dimensions and the measures' fields of each row. The values of the cell show above the list (*Country: France*, *Stage: Negotiation*); **Back to the analysis** returns to the figures.

In the detail view, and after a drill, a row of an entity linked to a screen opens that screen's **dialog**: the record shows as it does in the screen, and can be edited with the same rights. The analysis refreshes after a save.

---

## Things to know

| Situation | What happens |
|---|---|
| A measure of a 1..n entity next to hub dimensions. | Summed per hub row, without duplicating the hub's rows. |
| Two 1..n entities in the rows. | Refused, with a message: one many-side entity at a time. |
| The note says the figures are partial. | More than 50,000 grouped rows were read: narrow the period or add a filter. |
| A superuser wants to see the query. | The **SQL** button of the toolbar shows the statement and its values. |

## What's next

- [Calculated fields](./calculated-fields.md) — fields of your own.
- [Saved analyses and dashboards](./saved-and-dashboards.md) — keep, share, export.
