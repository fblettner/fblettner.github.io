# Popper Component

## Description
The `Popper` component provides a floating UI container that appears next to an anchor element. It supports various placements and can be configured as a modal.

## Props

| Prop          | Type                                      | Default        | Description |
|--------------|------------------------------------------|----------------|-------------|
| `open`      | `boolean`                              | `false`       | Controls the visibility of the popper. |
| `anchorEl`  | `HTMLElement | null | undefined`       | `undefined`  | The element that the popper is anchored to. |
| `placement` | `"top" | "bottom" | "left" | "right" | "bottom-start" | "bottom-end"` | `"bottom-start"` | The position of the popper relative to the anchor. |
| `disablePortal` | `boolean`                           | `false`      | If true, the popper will not be rendered inside a portal. |
| `modal`     | `boolean`                              | `false`      | If true, a backdrop is shown behind the popper, making it act like a modal. |
| `onClose`   | `() => void`                           | `undefined`  | Callback triggered when the popper is closed. |

## Example Usage
```tsx
import { useState } from "react";
import { Popper, Button } from "@nomana-it/liberty-core"

export const PopperExample = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Popper</Button>

      <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-start">
        <div style={{ padding: "10px", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          This is a popper content.
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 