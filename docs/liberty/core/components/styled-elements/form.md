# Styled Form Components

## Description
The `Form` components provide styled wrappers for HTML forms, ensuring consistent spacing and layout in authentication pages and user input sections.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| `width`  | `string | number` | `100%`  | Defines the form width to ensure proper responsiveness. |
| `marginTop` | `string | number` | `theme.spacing(1)` | Sets the top margin for spacing and alignment. |

## Example Usage

### Basic Login Form
```tsx
import { Form_Login } from '@nomana-it/liberty-core';

export const LoginFormExample = () => {
  return (
    <Form_Login>
        <Div_AppsLogin>
            <Input_White
                variant="standard"
                required
                fullWidth
                id="userid"
                label={t("login.userid")}
                name="user"
                autoComplete="user"
                autoFocus
            />
        </Div_AppsLogin>
        <Div_AppsLogin>
            <Input_White
                variant="standard"
                required
                fullWidth
                name="password"
                label={t("login.password")}
                type="password"
                id="password"
                autoComplete="off"
            />
        </Div_AppsLogin>
        <Button_Login type="submit" fullWidth variant="contained">
            {t("login.loginButton")}
        </Button_Login>
    </Form_Login>
  );
};
```

---

# Predefined Styled Form Components

Liberty Core provides predefined styled `form` components to simplify UI development.

### **General Styled Forms**
- `Form_Login`

```

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner) 