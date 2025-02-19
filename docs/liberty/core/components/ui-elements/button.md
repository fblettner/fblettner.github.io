# Button Component

## Description
The `Button` component provides a customizable button with multiple variants and props.  
It supports different styles, icons, full-width mode, and disabled states.

## Props
| Prop          | Type                          | Description                                      |
|--------------|------------------------------|--------------------------------------------------|
| `variant`   | `"contained", "outlined", "text"` | Defines the button style                          |
| `fullWidth` | `boolean`                   | If true, the button spans the full container width |
| `disabled`  | `boolean`                   | If true, the button is disabled                   |
| `startIcon` | `ReactNode, React.ElementType` | Icon displayed before button text               |
| `endIcon`   | `ReactNode, React.ElementType` | Icon displayed after button text                |
| `color`     | `string`                     | Custom color for the button text                 |
| `href`      | `string`                     | If provided, renders the button as a link       |
| `target`    | `"_blank", "_self", "_parent", "_top"` | Defines link target behavior                     |
| `rel`       | `string`                     | Specifies the relationship between the link and target |
| `badgeContent` | `ReactNode`              | Adds a small badge (for notifications, counts, etc.) |
| `badgeColor`  | `string`                  | Defines badge background color                    |

## Example Usage
```tsx
import { Button } from "liberty-core";
import { FaCheck } from "react-icons/fa";

export const ButtonExample = () => {
  return (
    <>
      {/* Default Contained Button */}
      <Button variant="contained" onClick={() => alert("Contained Button Clicked")}>
        Contained Button
      </Button>

      {/* Outlined Button */}
      <Button variant="outlined" color="secondary" onClick={() => alert("Outlined Button Clicked")}>
        Outlined Button
      </Button>

      {/* Button with Icon */}
      <Button startIcon={<FaCheck />} variant="contained">
        With Icon
      </Button>

      {/* Disabled Button */}
      <Button disabled>Disabled Button</Button>

      {/* Full Width Button */}
      <Button fullWidth variant="contained">Full Width Button</Button>
    </>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  