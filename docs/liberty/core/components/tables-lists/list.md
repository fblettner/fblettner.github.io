# List Component


## Description
The `List` component provides a structured way to display lists of items, supporting:
- **Customizable list density and padding**
- **Selectable, disabled, and clickable items**
- **Icons and text combinations**
- **Collapsible sub-menus for hierarchical navigation**

## Props

### **List**
| Prop      | Type      | Default  | Description |
|-----------|----------|----------|-------------|
| `dense`  | `boolean` | `false` | Reduces padding between items. |
| `padding` | `boolean` | `true`  | Enables padding inside the list. |

### **ListItem**
| Prop      | Type      | Default  | Description |
|-----------|----------|----------|-------------|
| `selected` | `boolean` | `false` | Highlights the selected item. |
| `disabled` | `boolean` | `false` | Disables interaction with the item. |
| `onClick` | `() => void` | `-` | Callback for when item is clicked. |

### **ListItemButton**
| Prop      | Type      | Default  | Description |
|-----------|----------|----------|-------------|
| `variant` | `"contained" , "outlined" , "text"` | `"text"` | Defines the button style. |
| `fullWidth` | `boolean` | `false` | Expands button to full width. |
| `disabled` | `boolean` | `false` | Disables button interaction. |
| `selected` | `boolean` | `false` | Highlights the selected button. |
| `startIcon` | `ReactNode` | `-` | Icon before the text. |
| `endIcon` | `ReactNode` | `-` | Icon after the text. |

### **Collapse**
| Prop      | Type      | Default  | Description |
|-----------|----------|----------|-------------|
| `in` | `boolean` | `false` | Controls visibility of child components. |

## Example Usage
```tsx
import { 
List, 
ListItem, 
ListItemButton, 
ListItemIcon, 
ListItemText, 
Collapse 
} from "@nomana-it/liberty-core"
import { LYReactIcon } from "@ly_styles/icons";
import { LYHomeIcon, LYSettingsIcon, LYMenusExpandMoreIcon, LYMenusExpandLessIcon } from "@ly_styles/icons";
import { useState, Fragment } from "react";

export const ListExample = () => {
const [open, setOpen] = useState(false);

return (
    <List>
    <Fragment>
        <ListItem>
        <ListItemButton
            variant="text"
            fullWidth
            onClick={() => setOpen(!open)}
            startIcon={LYHomeIcon}
            endIcon={open ? LYMenusExpandLessIcon : LYMenusExpandMoreIcon}
        >
            <ListItemText primary="Home" />
        </ListItemButton>
        </ListItem>

        <Collapse in={open}>
        <List padding={false}>
            <ListItem>
            <ListItemButton variant="text" fullWidth startIcon={LYSettingsIcon}>
                <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>
        </List>
        </Collapse>
    </Fragment>
    </List>
);
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 