# MarkDown Component

## Description
The `MarkDown` component renders markdown content and supports syntax highlighting for code blocks, tables, and links.

## Props

| Prop      | Type     | Description |
|-----------|---------|-------------|
| `markdown` | `string` | The markdown content to be rendered. |

## Example Usage
```tsx
import { MarkDown } from "@nomana-it/liberty-core"

const markdownText = `
# Sample Markdown
This is an example of using the **MarkDown** component.

## Features
- Supports **bold** and *italic* text.
- Syntax highlighting for code blocks.
- Tables, lists, and links.

### Code Block Example:
```tsx
const example = "Hello, Markdown!";
console.log(example);
```

### Table Example:
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

[Visit our website](https://example.com)

```tsx
export const MarkDownExample = () => {
  return <MarkDown markdown={markdownText} />;
};
```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  