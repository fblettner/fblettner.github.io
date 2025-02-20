# Menu Component

## Description
The `Menu` component is a floating menu that appears next to an anchor element. It supports different placements, can be used for contextual actions, and can be wrapped inside a `Popper`.

## Props

### Menu Props
| Prop                     | Type                                              | Default        | Description |
|--------------------------|--------------------------------------------------|----------------|-------------|
| `open`                 | `boolean`                                       | `false`       | Controls the visibility of the menu. |
| `anchorEl`             | `HTMLElement | null | undefined`               | `undefined`  | The element that the menu is anchored to. |
| `anchorPosition`       | `{ top: number; left: number }`                 | `undefined`  | Manually position the menu. |
| `onClose`             | `() => void`                                    | `undefined`  | Callback when the menu is closed. |
| `placement`           | `"bottom-start" | "bottom-end" | "top-start" | "top-end"` | `"bottom-start"` | The position of the menu relative to the anchor. |
| `zIndex`              | `number`                                        | `DefaultZIndex.Menus` | Controls the stacking order. |
| `preventBrowserContextMenu` | `boolean`                                  | `false`      | Prevents the default browser context menu from appearing. |

### MenuItem Props
| Prop       | Type                              | Default   | Description |
|------------|----------------------------------|-----------|-------------|
| `onClick` | `() => void`                   | `undefined` | Function triggered when the item is clicked. |
| `startIcon` | `ReactNode | React.ElementType` | `undefined` | Icon to be displayed before the text. |

### SubMenu Props
| Prop       | Type                              | Default   | Description |
|------------|----------------------------------|-----------|-------------|
| `label`   | `string`                       | Required  | The text displayed on the submenu item. |
| `startIcon` | `ReactNode | React.ElementType` | `undefined` | Icon to be displayed before the text. |
| `children` | `ReactNode`                   | Required  | The submenu content. |

## Example Usage
```tsx
import { useState } from "react";
import { Menu, MenuItem, SubMenu, Popper, Divider, Button } from "@nomana-it/liberty-core"

export const MenuExample = () => {
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
      <Button onClick={handleOpen}>Open Context Menu</Button>

      <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-end">
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} placement="bottom-end">
          <MenuItem onClick={() => alert("Action 1 clicked")}>Action 1</MenuItem>
          <MenuItem onClick={() => alert("Action 2 clicked")}>Action 2</MenuItem>
          <Divider />
          <SubMenu label="More Options">
            <MenuItem onClick={() => alert("Sub Action 1 clicked")}>Sub Action 1</MenuItem>
            <MenuItem onClick={() => alert("Sub Action 2 clicked")}>Sub Action 2</MenuItem>
          </SubMenu>
          <Divider />
          <MenuItem onClick={() => alert("Closing menu")} onClose={handleClose}>Close</MenuItem>
        </Menu>
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