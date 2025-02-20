# FlexPanels Component

## Description
The `FlexPanels` component is a flexible, resizable layout container that allows dynamic panel resizing and optional drag-and-drop reordering.

## Props
| Prop          | Type                        | Default       | Description |
|--------------|----------------------------|--------------|-------------|
| `panels`      | `number[]`               | `[1, 1]`     | Initial flex sizes for each panel. |
| `children`    | `ReactNode[]`            | `-`          | Components to be placed inside the panels. |
| `direction`   | `"horizontal" | "vertical"` | `"horizontal"` | Defines the layout direction. |
| `dragEnabled` | `boolean`               | `false`      | Enables drag-and-drop reordering. |

## Example Usage
```tsx
import { FlexPanels } from "liberty-core";

export const FlexPanelsExample = () => {
  return (
    <FlexPanels panels={[2, 1]} direction="horizontal" dragEnabled>
      <div style={{ padding: "20px", background: "#4c9aff" }}>Panel 1</div>
      <div style={{ padding: "20px", background: "#3366ff" }}>Panel 2</div>
    </FlexPanels>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  