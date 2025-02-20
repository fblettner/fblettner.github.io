# DatePicker Component

## Description
The `DatePicker` component is a styled date selection field that allows users to pick a date from a calendar popup.

It supports:
- **Manual input and selection** via a pop-up calendar.
- **Month and year navigation**.
- **Custom labels and full-width option**.
- **Disabled state handling**.

## Props
| Prop          | Type                   | Default | Description |
|--------------|----------------------|---------|-------------|
| `id`        | `string`            | -       | Unique identifier for the input. |
| `value`     | `Dayjs | null`     | `null`  | The selected date. |
| `onChange`  | `(date: Dayjs | null) => void` | - | Callback triggered when a date is selected. |
| `disabled`  | `boolean`          | `false` | Disables date selection. |
| `fullWidth` | `boolean`          | `true` | Expands input width to 100%. |
| `label`     | `string`            | -       | Label for the date input. |

## Example Usage
```tsx
import { DatePicker } from "liberty-core";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <DatePicker
      id="example-date-picker"
      label="Select a date"
      value={selectedDate}
      onChange={setSelectedDate}
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 