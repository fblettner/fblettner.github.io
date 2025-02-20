# Tabs Component

## Description
The `Tabs` and `Tab` components allow navigation between different views or settings. It supports standard and scrollable variants.

## Props - Tabs
| Prop           | Type                                   | Default      | Description                                      |
|---------------|--------------------------------------|--------------|--------------------------------------------------|
| `value`       | `string`                              | -            | The currently selected tab value.               |
| `onChange`    | `(event, newValue: string) => void`  | -            | Callback function triggered when a tab is clicked. |
| `variant`     | `"standard" | "scrollable"`           | `"standard"` | Defines if the tabs are standard or scrollable. |
| `scrollButtons` | `boolean`                          | `false`     | Enables scroll buttons for overflow tabs.       |

## Props - Tab
| Prop         | Type                  | Default  | Description                                   |
|-------------|----------------------|----------|-----------------------------------------------|
| `id`       | `string`             | -        | Unique identifier for the tab.                |
| `label`    | `string | ReactNode`  | -        | Label displayed inside the tab.               |
| `value`    | `string`             | -        | The value of the tab, used for selection.     |
| `isActive` | `boolean`            | `false` | Determines if the tab is currently active.    |
| `onClick`  | `(event) => void`    | -        | Event triggered when the tab is clicked.      |

## Example Usage
```tsx
import { Tab, Tabs } from "liberty-core";
import { useState } from "react";

export const TabsExample = () => {
  const [selectedTab, setSelectedTab] = useState("general");

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab id="general" label="General" value="general" />
        <Tab id="advanced" label="Advanced" value="advanced" />
        <Tab id="settings" label="Settings" value="settings" />
      </Tabs>

      <div style={{ marginTop: "16px", padding: "8px", border: "1px solid #ddd" }}>
        {selectedTab === "general" && <p>General Settings Content</p>}
        {selectedTab === "advanced" && <p>Advanced Settings Content</p>}
        {selectedTab === "settings" && <p>Settings Panel Content</p>}
      </div>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 