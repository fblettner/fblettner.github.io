# Checkbox Component

## Description
The `Checkbox` component is a custom-styled checkbox that supports indeterminate states, labels, and various label placements.

## Props
| Prop           | Type                                      | Default  | Description                                             |
|---------------|-----------------------------------------|----------|---------------------------------------------------------|
| `checked`      | `boolean`                              | `false` | Whether the checkbox is checked.                        |
| `disabled`     | `boolean`                              | `false` | Disables the checkbox.                                  |
| `indeterminate` | `boolean`                              | `false` | Displays an indeterminate (dash) state.                |
| `label`        | `string`                              | `""`    | Optional label displayed next to the checkbox.         |
| `labelPlacement` | `"start" , "end" , "top" , "bottom"` | `"end"` | Defines where the label appears relative to the checkbox. |

## Example Usage
```tsx
import { Checkbox } from "liberty-core";

export const CheckboxExample = () => {
  return (
    <div>
      <Checkbox checked={true} label="Checked" />
      <Checkbox checked={false} label="Unchecked" />
      <Checkbox indeterminate={true} label="Indeterminate" />
      <Checkbox checked={true} disabled label="Disabled Checked" />
      <Checkbox checked={false} disabled label="Disabled Unchecked" />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  