# Select Component

## Description
The `Select` component provides a dropdown for selecting options, with support for filtering, free text input, and clearing the selected value.

## Props

| Prop              | Type                                          | Default       | Description |
|------------------|---------------------------------------------|---------------|-------------|
| `id`            | `string`                                  | -             | Unique identifier for the input. |
| `label`         | `string`                                  | -             | Label for the input field. |
| `options`       | `any[]`                                   | `[]`         | Array of options for selection. |
| `loading`       | `boolean`                                 | `false`      | Displays a loading indicator if true. |
| `freeSolo`      | `boolean`                                 | `false`      | Allows free text input. |
| `disabled`      | `boolean`                                 | `false`      | Disables the select input. |
| `fullWidth`     | `boolean`                                 | `false`      | If true, the input takes up the full width of its container. |
| `value`         | `any`                                     | -             | The current selected value. |
| `onChange`      | `(event, value) => void`                  | -             | Callback when an option is selected. |
| `onInputChange` | `(event, value, reason) => void`          | -             | Callback when the input value changes. |
| `getOptionLabel`| `(option: any) => string`                 | Extracts label from option | Function to determine how options are displayed. |
| `onOpen`        | `() => void`                              | -             | Callback when the dropdown opens. |
| `onBlur`        | `(event) => void`                         | -             | Callback when the input loses focus. |
| `onFocus`       | `(event) => void`                         | -             | Callback when the input gains focus. |
| `variant`       | `"outlined" | "filled" | "standard"`      | `"outlined"` | Defines the visual style of the input. |
| `disablePortal` | `boolean`                                 | `false`      | Renders the dropdown inline instead of inside a portal. |
| `showClearButton` | `boolean`                               | `true`       | Displays a button to clear the selection. |
| `selectOnly`    | `boolean`                                 | `false`      | Disables typing and allows selection only. |

## Example Usage
```tsx
import { useState } from "react";
import { Select, MenuItem } from "liberty-core";

export const SelectExample = () => {
  const [value, setValue] = useState(null);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" }
  ];

  return (
    <Select
      id="example-select"
      label="Select an Option"
      options={options}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 