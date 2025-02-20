# ConfirmationDialog Component

## Description
The `ConfirmationDialog` component provides a standard confirmation popup with customizable actions.

## Props
| Prop        | Type         | Default  | Description                                      |
|------------|-------------|----------|--------------------------------------------------|
| `open`    | `boolean`  | `false` | Controls whether the dialog is visible. |
| `title`   | `string`   | `""`     | The title of the confirmation dialog. |
| `content` | `string`   | `""`     | The content message of the dialog. |
| `onClose`  | `() => void` | `undefined` | Callback function when the dialog is closed. |
| `onAccept` | `() => void` | `undefined` | Callback function when the "Yes" button is clicked. |
| `onDecline` | `() => void` | `undefined` | Callback function when the "No" button is clicked. |

## Example Usage
```tsx
import { ConfirmationDialog, Button } from "@nomana-it/liberty-core"
import { useState } from "react";

export const ConfirmationDialogExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Confirmation Dialog</Button>
      <ConfirmationDialog
        open={open}
        title="Confirm Action"
        content="Are you sure you want to proceed?"
        onClose={() => setOpen(false)}
        onAccept={() => {
          alert("Accepted");
          setOpen(false);
        }}
        onDecline={() => {
          alert("Declined");
          setOpen(false);
        }}
      />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 