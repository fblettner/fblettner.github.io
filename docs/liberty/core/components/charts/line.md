# LineChart Component

## Description
The `LineChart` component provides a customizable line chart using Chart.js. It supports:
- **Multiple datasets**
- **Custom colors and grid configuration**
- **Smooth line interpolation**
- **Dual Y-axis support**
- **Tooltip and legend customization**

## Props
| Prop        | Type                         | Default | Description |
|------------|------------------------------|---------|-------------|
| `dataset`  | `Record<string, any>[]`      | -       | Data source for the chart. |
| `colors`   | `string[]`                 | -       | Colors for each data series. |
| `grid`     | `{ horizontal: boolean; vertical: boolean }` | `{ horizontal: true, vertical: true }` | Toggles grid lines. |
| `xAxis`    | `{ scaleType: string; data: string[]; label: string }[]` | - | X-axis configuration. |
| `yAxis`    | `{ id: string; label: string }[]`       | -       | Y-axis configuration. |
| `series`   | `{ dataKey: string; label: string; yAxisKey?: string }[]` | - | Defines the data series to be plotted. |

## Example Usage
```tsx
import { LineChart } from "liberty-core";

const dataset = [
  { month: "Jan", sales: 100, revenue: 200 },
  { month: "Feb", sales: 150, revenue: 250 },
  { month: "Mar", sales: 200, revenue: 300 },
];

export const LineChartExample = () => {
  return (
    <LineChart
      dataset={dataset}
      colors={["#1976d2", "#ff9800"]}
      grid={{ horizontal: true, vertical: false }}
      xAxis={[{ scaleType: "category", data: ["Jan", "Feb", "Mar"], label: "Month" }]}
      yAxis={[{ id: "salesAxis", label: "Sales" }, { id: "revenueAxis", label: "Revenue" }]}
      series={[
        { dataKey: "sales", label: "Sales", yAxisKey: "salesAxis" },
        { dataKey: "revenue", label: "Revenue", yAxisKey: "revenueAxis" },
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