# BarChart Component

## Description
The `BarChart` component is a customizable bar chart using Chart.js. It supports:
- **Dynamic datasets**
- **Custom colors**
- **Grid configuration**
- **X and Y axis customization**
- **Multiple series support**

## Props
| Prop        | Type                         | Default | Description |
|------------|------------------------------|---------|-------------|
| `dataset`  | `Record<string, any>[]`      | -       | Data source for the chart. |
| `colors`   | `string[]`                 | -       | Colors for each data series. |
| `grid`     | `{ horizontal: boolean; vertical: boolean }` | `{ horizontal: true, vertical: true }` | Toggles grid lines. |
| `xAxis`    | `{ scaleType: string; data: string[]; label: string }[]` | - | X-axis configuration. |
| `yAxis`    | `{ label: string }[]`       | -       | Y-axis configuration. |
| `series`   | `{ dataKey: string; label: string }[]` | - | Defines the data series to be plotted. |

## Example Usage
```tsx
import { BarChart } from "@nomana-it/liberty-core"

const dataset = [
  { month: "Jan", revenue: 10000, profit: 3000 },
  { month: "Feb", revenue: 12000, profit: 4000 },
  { month: "Mar", revenue: 15000, profit: 5000 },
];

export const BarChartExample = () => {
  return (
    <BarChart
      dataset={dataset}
      colors={["#1976d2", "#ff9800"]}
      grid={{ horizontal: true, vertical: false }}
      xAxis={[{ scaleType: "category", data: ["Jan", "Feb", "Mar"], label: "Month" }]}
      yAxis={[{ label: "Amount ($)" }]}
      series={[
        { dataKey: "revenue", label: "Revenue" },
        { dataKey: "profit", label: "Profit" },
      ]}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 