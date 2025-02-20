# InputCheckbox Component

## Description
The `InputCheckbox` component is a reusable checkbox input with built-in state management. It supports:
- **Custom labels**
- **Controlled & uncontrolled behavior**
- **Disabled state**
- **Callback on change events**

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| `id` | `string` | - | Unique identifier for the checkbox. |
| `label` | `string` | - | Label displayed next to the checkbox. |
| `onChange` | `(data: { id: string, value: boolean }) => void` | - | Callback function triggered on change. |
| `defaultValue` | `boolean` | `false` | Initial checked state. |
| `disabled` | `boolean` | `false` | Disables the checkbox input. |

## Example Usage
```tsx
import { InputCheckbox } from "liberty-core";
import { useState } from "react";

export const InputCheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: { id: string; value: boolean }) => {
    setIsChecked(data.value);
  };

  return (
    <InputCheckbox
      id="custom-checkbox"
      label="Enable Feature"
      defaultValue={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 