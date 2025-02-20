# InputFile Component

## Description
The `InputFile` component allows users to upload files via a button-based interface. It supports:
- **File type validation** (MIME types and extensions).
- **File size limit enforcement** (default: 5MB).
- **Custom file input handling** with a hidden input field.
- **Snackbar messages for validation feedback**.

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| `onFileChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - | Callback triggered when a file is selected. |
| `fileInputRef` | `React.RefObject<HTMLInputElement | null>` | - | Ref to access the file input element. |
| `disabled` | `boolean` | `false` | Disables file selection. |
| `accept` | `string` | `""` | Specifies accepted file types (e.g., ".png,.jpg"). |

## Example Usage
```tsx
import { InputFile } from "@nomana-it/liberty-core"
import { useRef } from "react";

export const InputFileExample = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Selected file: \${file.name}`);
    }
  };

  return (
    <InputFile
      onFileChange={handleFileChange}
      fileInputRef={fileInputRef}
      disabled={false}
      accept=".png,.jpg,.pdf"
    />
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 