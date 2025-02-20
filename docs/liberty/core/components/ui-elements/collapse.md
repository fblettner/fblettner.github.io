# Collapse Component

## Description
The `Collapse` component allows content to expand and collapse smoothly with an animation.

## Props
| Prop              | Type         | Default  | Description                                     |
|------------------|-------------|----------|-------------------------------------------------|
| `in`           | `boolean`  | `false` | Controls whether the content is expanded or collapsed. |
| `timeout`       | `number`   | `0`      | Duration of the expand/collapse transition (in milliseconds). |
| `collapsedHeight` | `string` | `"0px"`  | The height of the content when collapsed. |

## Example Usage
```tsx
import { Collapse, Button } from "@nomana-it/liberty-core"
import { useState } from "react";

export const CollapseExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Collapse" : "Expand"}
      </Button>
      <Collapse in={open} timeout={300} collapsedHeight="0px">
        <div style={{ padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          This content is collapsible.
        </div>
      </Collapse>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  