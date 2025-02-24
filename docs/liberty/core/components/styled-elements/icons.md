# Icon Components

## Description
The **Liberty Core Icon Set** provides a predefined collection of **Material Icons** and **Font Awesome Icons** wrapped in a standardized interface for easier integration. The components are categorized for **UI consistency and accessibility**.

## Features
✅ Pre-styled **Material and Font Awesome Icons**  
✅ Easy to use with standard **React components**  
✅ Support for **color themes** and **custom sizes**  

---

## **Usage**

### Example Usage:
```tsx
import { LYSearchIcon } from '@nomana-it/liberty-core';

export const IconExample = () => {
  return <LYSearchIcon size="24px" color="primary" />;
};
```

---

## **Predefined Icon Components**

### **General UI Icons**
- `LYMenuIcon` — Navigation menu icon.
- `LYMenuOpenIcon` — Expanded menu icon.
- `LYDashboardIcon` — Dashboard navigation.
- `LYLightModeIcon` — Light mode theme toggle.
- `LYDarkModeIcon` — Dark mode theme toggle.
- `LYNotificationsIcon` — Notifications indicator.
- `LYLogoutIcon` — Logout action.
- `LYAccountCircleIcon` — User profile icon.

---

### **Action Icons**
- `LYCloseIcon` — Close dialogs or modals.
- `LYCheckIcon` — Success confirmation.
- `LYClearIcon` — Clear input fields or selections.
- `LYSaveIcon` — Save or confirm actions.
- `LYCancelIcon` — Cancel or dismiss actions.
- `LYEditIcon` — Edit or modify content.
- `LYDeleteIcon` — Delete an item.
- `LYHelpIcon` — Information or help icon.
- `LYSettingsIcon` — Settings or configurations.

---

### **Navigation & Direction Icons**
- `LYArrowDownwardIcon` — Downward navigation.
- `LYArrowUpwardIcon` — Upward navigation.
- `LYArrowRightIcon` — Move forward.
- `LYArrowLeftIcon` — Move backward.
- `LYArrowCircleUpIcon` — Emphasized upward action.
- `LYArrowCircleDownIcon` — Emphasized downward action.
- `LYArrowCircleRightIcon` — Emphasized rightward action.
- `LYExpandLessIcon` — Collapse UI elements.
- `LYExpandMoreIcon` — Expand UI elements.
- `LYUnfoldMoreIcon` — Toggle expanded state.

---

### **File & Media Icons**
- `LYContentCopyIcon` — Copy content.
- `LYContentPasteIcon` — Paste copied content.
- `LYAttachFileIcon` — Attach a document.
- `LYCloudUploadIcon` — Upload files.
- `LYDownloadIcon` — Download files.
- `LYUploadIcon` — Upload to the server.
- `LYSaveIcon` — Save data.
- `LYDeleteIcon` — Remove files or content.
- `LYFileIcon` — General file representation.

---

### **Database & Developer Icons**
- `LYDatabaseIcon` — Represents database-related actions.
- `LYGitIcon` — Git version control.
- `LYPortainerIcon` — Docker Portainer icon.
- `LYSocketIcon` — Network-related operations.
- `LYLogsIcon` — System logs or debugging.
- `LYChartIcon` — Data analytics or reports.
- `LYBugIcon` — Bug tracking or error handling.

---

### **Table & Grid Icons**
- `LYViewColumnIcon` — View columns in tables.
- `LYFilterListIcon` — Filter settings.
- `LYFilterAltIcon` — Advanced filtering options.
- `LYTableViewIcon` — View data in table format.
- `LYFormatListBulletedIcon` — List representation.

---

### **Accessibility & UI Enhancements**
- `LYVisibilityOffIcon` — Hide content visibility.
- `LYPushPinIcon` — Pin important items.
- `LYMinimizeIcon` — Minimize elements.
- `LYMaximizeIcon` — Maximize elements.
- `LYDensitySmallIcon` — Compact UI view.
- `LYDensityMediumIcon` — Medium UI density.
- `LYDensityLargeIcon` — Expanded UI density.

---

## **Variant Icons**
The following icons are dynamically assigned based on UI context:

| Variant | Icon |
|---------|------|
| **Success** ✅ | `LYSuccessIcon` |
| **Error** ❌ | `LYErrorIcon` |
| **Warning** ⚠️ | `LYWarningIcon` |
| **Info** ℹ️ | `LYInfoIcon` |

---

## **Custom Themed Icons**
```tsx
import { LYReactIcon, LYSuccessIcon } from '@nomana-it/liberty-core';

export const CustomIconExample = () => {
  return <LYReactIcon icon={LYSuccessIcon} size="32px" color="success" />;
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 