# Tooltip Component

## Description
The `Tooltip` component provides a simple way to display contextual hints when hovering over an element.

## Props
| Prop      | Type         | Default  | Description                                     |
|-----------|------------|----------|-------------------------------------------------|
| `title`  | `string`   | `""`   | The text content displayed inside the tooltip. |
| `children` | `ReactNode` | -        | The element that triggers the tooltip on hover. |

## Example Usage
```tsx
import { Tooltip, Button } from "liberty-core";

export const TooltipExample = () => {
  return (
    <Tooltip title="Click to submit">
      <Button variant="contained">Submit</Button>
    </Tooltip>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 