# useMediaQuery & useDeviceDetection

## Description
These hooks help in detecting screen sizes and device types for responsive UI design.

### `useMediaQuery(query: string)`
This hook listens to media queries and returns `true` or `false` based on the match.

### `useDeviceDetection()`
This hook detects if the user is on a mobile or tablet device.

## Example Usage
```tsx
import { useMediaQuery, useDeviceDetection } from "@ly_common/UseMediaQuery";
import { Typography } from "liberty-core";

export const MediaQueryExample = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");
  const isDeviceMobile = useDeviceDetection();

  return (
    <div>
      <Typography variant="body1">
        {isMobile ? "📱 Mobile View" : "💻 Desktop View"}
      </Typography>
      <Typography variant="body1">
        {isTablet ? "📟 Tablet View" : "🖥️ Large Screen"}
      </Typography>
      <Typography variant="body1">
        {isDeviceMobile ? "📱 Mobile Device Detected" : "💻 Not a Mobile Device"}
      </Typography>
    </div>
  );
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  