---
title: Saved grid views
description: "Save a data grid's columns, sort, filters and grouping as a named view — your own views follow you across devices, and an admin can publish shared views with one set as the default. Includes the Summary view — server-aggregated parent rows with lazy-loaded child rows — and day-grain filtering on timestamp columns."
keywords: [Liberty Framework, grid views, saved views, table view, summary view, columns, filters, sort, grouping, default view, shared views, day-grain filter, timestamp filter, lazy load]
---

# Saved grid views

Any data grid — a screen's table or an ad-hoc Table View — can remember how you set it up. A **view** captures the grid's full presentation and lets you switch back to it in one click:

- which **columns** are visible, and their **order**;
- the **sort**;
- the per-column **filters**;
- the **grouping**;
- the **page size**.

---

## Your views vs shared views

The **Views** menu on the grid toolbar lists two groups:

- **Shared** — published, read-only views available to everyone on that screen. An admin authors them in the [Screen Designer](build/screens/overview.md)'s *Views* tab, and may mark one as the **default** — the layout the grid opens with.
- **My views** — the views you save yourself. They are stored per user on the server, so they **follow you across devices and sessions**. You can have as many as you like per grid.

A regular user reads shared views and manages their own; publishing a view for everyone is an admin action in the Designer.

---

## Working with views

| Action | What it does |
|---|---|
| **Save as…** | Names the current columns, sort, filters and grouping as a new personal view. Reusing a name overwrites that view. |
| **Save** | Overwrites the active personal view in place (shown only when the active view is one of yours). |
| Select a view | Applies a shared or personal view. |
| **Delete view** | Removes one of your own views (the trash icon). |
| **Reset** | Reverts to the screen's default shared view, or to its base column layout if there is none. Handy when an older saved state conflicts with a column that is now conditionally hidden. *Reset* lives in the Columns menu. |

The grid also remembers, **per device**, the last view you opened on each table — so you land back where you left off — while the views themselves live on the server.

---

## Summary view

A saved view can be marked as a **Summary view** — instead of returning every row, the grid asks the server to aggregate parent rows and returns just the roll-up. Each parent row carries a chevron; clicking it lazy-loads the underlying child rows.

Where it fits:

- **Accurate counts over the full set** — the aggregate runs against the whole query result, not the current page, so a group count reflects the truth even on a million-row query.
- **Bucketing on a timestamp column** — pick **day**, **month** or **year** as the aggregation bucket; the parent row shows the bucket label and the child rows are the raw records that fell into it.
- **Server-side heavy-lifting** — the aggregation is a `GROUP BY` executed by the pool, not a JS reduce; child rows are fetched only when their parent is expanded, keeping the payload small.

The summary layout replaces the previous nested grid — expandable **sub-rows** are native, so keyboard navigation and column resizing behave like the rest of the grid.

---

## Day-grain filter on timestamp columns

Filtering a timestamp column doesn't force you to type a full `YYYY-MM-DD HH:MM:SS` bound. The column-header filter lets you pick a **day** and matches every row whose timestamp falls on that day (server-side lower / upper bound). It's the same widget that powers the Summary view's *day* bucket.

---

## Tips & best practices

- **Save the layouts you reuse.** A "month-end" view with the right columns, filter and sort is one click away every time.
- **Publish the team's standard as a shared default.** Author it once in the Designer's *Views* tab and mark it default, so everyone opens the grid on the agreed layout.
- **Reach for *Reset* when a grid looks wrong after an upgrade.** If a column became conditionally hidden, an old saved state can fight the new rule — *Reset* clears it back to the screen's default.
