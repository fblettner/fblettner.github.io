# PieChart Component

## Description
The `PieChart` component provides a customizable **Doughnut/Pie Chart** using Chart.js. It supports:
- **Custom colors**
- **Tooltip with percentage display**
- **Legend positioning**
- **Adaptive theming for light/dark modes**

## Props
| Prop       | Type                  | Default | Description |
|------------|-----------------------|---------|-------------|
| `data`     | `{ value: number; label: string }[]` | -       | The data to be displayed. |
| `colors`   | `string[]`          | Default colors | Custom colors for segments. |

## Example Usage
```tsx
import { PieChart } from "liberty-core";

const chartData = [
  { value: 40, label: "Product A" },
  { value: 25, label: "Product B" },
  { value: 20, label: "Product C" },
  { value: 15, label: "Product D" },
];

export const PieChartExample = () => {
  return (
    <PieChart 
      data={chartData} 
      colors={["#1976d2", "#ff9800", "#4CAF50", "#E91E63"]}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 