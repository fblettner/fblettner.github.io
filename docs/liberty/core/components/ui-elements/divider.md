# Divider Component

# Divider Component

## Description
The `Divider` component is used to separate content with a thin line. It can be displayed horizontally or vertically, and it adapts to dark mode automatically.

## Props
| Prop         | Type                    | Default       | Description                                      |
|-------------|------------------------|--------------|--------------------------------------------------|
| `orientation`  | `"horizontal" , "vertical"` | `"horizontal"` | Defines the divider's orientation. |
| `flexItem` | `boolean` | `false` | Allows the divider to stretch when inside a flex container. |

## Example Usage
```tsx
import { Divider } from "liberty-core";

export const DividerExample = () => {
  return (
    <div>
      <p>Above the divider</p>
      <Divider />
      <p>Below the divider</p>

      <div style={{ display: "flex", alignItems: "center", height: "50px", gap: "10px" }}>
        <span>Item 1</span>
        <Divider orientation="vertical" flexItem />
        <span>Item 2</span>
      </div>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  