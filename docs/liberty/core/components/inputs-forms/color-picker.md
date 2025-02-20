# InputColor Component

## Description
The `InputColor` component allows users to select colors using an interactive color picker. It supports:
- **Customizable color selection.**
- **Fullscreen mode for small screens.**
- **Draggable & resizable dialogs for desktop users.**
- **Real-time preview of selected color.**

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| `id` | `string` | - | Unique identifier for the input field. |
| `label` | `string` | - | Label displayed above the input field. |
| `onChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - | Callback triggered when the color changes. |
| `value` | `string` | `""` | Initial selected color in HEX format. |
| `disabled` | `boolean` | `false` | Disables color selection. |

## Example Usage
```tsx
import { InputColor } from "liberty-core";
import { useState } from "react";

export const InputColorExample = () => {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <InputColor
      id="custom-color-picker"
      label="Select a Color"
      value={color}
      onChange={handleColorChange}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 