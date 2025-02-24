# Styled Dialog Components

## Description
The `Dialog` components provide structured elements for building modal dialogs with proper styling, responsiveness, and accessibility.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| `variant`  | `"primary", "secondary"` | `"primary"` | Defines the typography variant for the title. |
| `fontSize` | `string, number` | `18px` | Defines the font size of the title. |
| `fontWeight` | `string, number` | `bold` | Sets the font weight of the title. |
| `background` | `string` | `theme.background.default` | Background color of the dialog content or actions. |
| `padding` | `string, number` | `theme.spacing(2)` | Defines padding for dialog components. |
| `borderTop` | `string` | `theme.palette.divider` | Adds a separator on top of the actions container. |
| `overflowY` | `string` | `auto` | Enables vertical scrolling for long content. |

## Example Usage

### Basic Dialog Title
```tsx
import { Dialog_Title } from '@nomana-it/liberty-core';

export const DialogTitleExample = () => {
  return (
    <Dialog_Title>
      Dialog Header
    </Dialog_Title>
  );
};
```

---

# Predefined Styled Dialog Components

Liberty Core provides a collection of predefined styled `Dialog` components to simplify modal UI development.

### **General Styled Dialog Components**
- `Dialog_Title`
- `Dialog_Content`
- `Dialog_Actions`

### **Detailed Predefined Components**

#### **Dialog_Title**
A styled typography component for dialog headers.

```tsx
import { Dialog_Title } from '@nomana-it/liberty-core';

<Dialog_Title>
  Dialog Header
</Dialog_Title>
```

#### **Dialog_Content**
A scrollable container for dialog content.

```tsx
import { Dialog_Content } from '@nomana-it/liberty-core';

<Dialog_Content>
  This is the content inside a dialog.
</Dialog_Content>
```

#### **Dialog_Actions**
A flex container for dialog action buttons.

```tsx
import { Dialog_Actions } from '@nomana-it/liberty-core';
import { Button } from '@nomana-it/liberty-core';

<Dialog_Actions>
  <Button variant="outlined">Cancel</Button>
  <Button variant="contained">Confirm</Button>
</Dialog_Actions>
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 