# SnackMessage Component

## Description
The `SnackMessage` component displays temporary alert messages (snack messages) that disappear after a set duration. These messages provide feedback for user actions and support different severity levels.

## Usage
The component is used globally and does not require props. It automatically retrieves and displays messages from the application's context.

## Behavior
- **Displays messages from the application context.**
- **Automatically removes messages after 6 seconds.**
- **Supports different severity levels (info, success, warning, error).**
- **Can be dismissed manually.**

## Example Usage
```tsx
import { SnackMessage } from "liberty-core";
import { useAppContext } from "@ly_context/AppProvider";
import { ESeverity } from "@ly_types/common";

export const Example = () => {
  const { addSnackMessage } = useAppContext();

  useEffect(() => {
    addSnackMessage("Export of table has started", ESeverity.warning);
  }, []);

  return (
    <div>
      {/* This component should be placed at the root level to display messages globally */}
      <SnackMessage />
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 