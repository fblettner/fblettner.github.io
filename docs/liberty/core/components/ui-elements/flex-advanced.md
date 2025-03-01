# AdvancedFlexPanels Component

## Description
The `AdvancedFlexPanels` component is a **bi-dimensional, resizable** layout system that allows for:
- **Dynamic resizing of both rows and columns**
- **Drag-and-drop reordering of child elements**
- **Smooth animations for user interactions**

## Props
| Prop         | Type                     | Default | Description |
|-------------|-------------------------|---------|-------------|
| `rows`     | `number`               | `2`     | Number of rows in the layout. |
| `columns`  | `number`               | `2`     | Number of columns in each row. |
| `children` | `ReactNode[][]`        | `-`     | Bi-dimensional array of child components. |

## Example Usage
```tsx
import { AdvancedFlexPanels } from "@nomana-it/liberty-core"

export const AdvancedFlexPanelsExample = () => {
  return (
    <AdvancedFlexPanels rows={2} columns={2}>
      {[
        [
          <div style={{ padding: "20px", background: "#0044cc", color: "white", borderRadius: "8px" }}>Panel 1</div>,
          <div style={{ padding: "20px", background: "#3366ff", color: "white", borderRadius: "8px" }}>Panel 2</div>,
        ],
        [
          <div style={{ padding: "20px", background: "#5588ff", color: "white", borderRadius: "8px" }}>Panel 3</div>,
          <div style={{ padding: "20px", background: "#77aaff", color: "white", borderRadius: "8px" }}>Panel 4</div>,
        ],
      ]}
    </AdvancedFlexPanels>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  