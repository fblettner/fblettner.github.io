# Typography Component

## Description
The `Typography` component is used for consistent text styling across the application.

## Props
| Prop         | Type                                         | Default   | Description                                      |
|-------------|--------------------------------------------|-----------|--------------------------------------------------|
| `variant`  | `"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline"` | `"body1"` | Defines the text style. |
| `color`    | `"primary" | "secondary" | "textPrimary" | "textSecondary" | "inherit"` | `"textPrimary"` | Sets the text color. |
| `align`    | `"left" | "center" | "right" | "justify"` | `"left"` | Controls text alignment. |
| `gutterBottom` | `boolean` | `false` | Adds margin-bottom spacing. |
| `noWrap` | `boolean` | `false` | Prevents text wrapping. |
| `paragraph` | `boolean` | `false` | Determines if the text is treated as a paragraph. |
| `fontWeight` | `"normal" | "bold" | "light" | number` | `"normal"` | Sets the font weight. |
| `fontStyle` | `"normal" | "italic" | "oblique"` | `"normal"` | Sets the font style. |
| `href` | `string` | `undefined` | Converts text into a hyperlink. |
| `target` | `"_blank" | "_self" | "_parent" | "_top"` | `undefined` | Defines how links open. |
| `rel` | `string` | `undefined` | Specifies link relationship attributes. |

## Example Usage
```tsx
import { Typography } from "liberty-core";

export const TypographyExample = () => {
  return (
    <div>
      <Typography variant="h1" color="primary">Heading 1</Typography>
      <Typography variant="h2" color="secondary">Heading 2</Typography>
      <Typography variant="body1" gutterBottom>
        This is a body text with bottom margin.
      </Typography>
      <Typography variant="overline" fontWeight="bold">
        Overline text in bold.
      </Typography>
      <Typography variant="body2" fontStyle="italic">
        Italic body text.
      </Typography>
      <Typography variant="h6" href="https://example.com" target="_blank">
        Clickable heading
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