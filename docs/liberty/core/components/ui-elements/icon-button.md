# IconButton Component

## Description
The `IconButton` component is a button wrapper specifically for **icons**, offering:
- **Customizable icon size**
- **Disabled and selected states**
- **Hover effects with scaling animation**

## Props

| Prop         | Type                           | Default        | Description |
|-------------|--------------------------------|--------------|-------------|
| `icon`    | `React.ElementType`           | `-`        | Icon component to display inside the button. |
| `isSelected` | `boolean`                   | `false`     | Determines if the button is selected. |
| `size`    | `"small" , "medium" , "large"` | `"medium"`  | Defines the icon size. |
| `disabled` | `boolean`                     | `false`     | Disables the button when set to true. |
| `component` | `ElementType`                | `"button"`  | Allows rendering a different HTML element. |

## Example Usage
```tsx
import { IconButton } from "@nomana-it/liberty-core"
import { LYThumbUpIcon, LYThumbDownOffIcon } from "@ly_styles/icons";

export const IconButtonExample = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <IconButton icon={LYThumbUpIcon} size="large" />
      <IconButton icon={LYThumbDownOffIcon} />
      <IconButton icon={LYThumbUpIcon} isSelected />
      <IconButton icon={LYThumbDownOffIcon} disabled />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  