# React + TypeScript + Vite + TailwindCSS + ShadcnUI

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

---

## Folder Structure

- `src` - main source code
- `src/api` - for api related functions
- `src/assets` - for anything that isn't code related like images, styles, fonts, etc.
- `src/components` - for components that can be reuse in the entire app
  - `src/components/layouts` - for layout based components
- `src/constants` - for constant values
- `src/contexts` - for app react context
- `src/hooks` - for react custom hooks
- `src/lib` - for third party facades of different library
- `src/pages` - for app component pages
- `src/router` - for app routes
- `src/store` - for app state management
- `src/tests` - for anything tests related like unit and e2e tests
  - `src/tests/unit` - for unit tests
  - `src/tests/e2e` - for e2e tests
- `src/utils` - for reusable utility functions

---

## Conventional Commit Messages

#### Types

- `feat` - Commits, that adds a new feature
- `add` - Commits, that add capability e.g. `feature`, `test`, `dependency`
- `cut` - Commits, that remove a capability e.g. `feature`, `test`, `dependency`
- `fix` - Commits, that fixes a bug
- `perf` - Commits, are special `refactor` commits, that improve performance
- `refactor` - Commits, that rewrite/restructure code without changing its behavior
- `docs` - Commits, that affect documentation only
- `style` - Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` - Commits, that add missing tests or correcting existing tests
- `chore` - Miscellaneous commits e.g. modifying `.gitignore`
- `start` - Begin doing something; e.g. create a feature flag.
- `stop` - End doing something; e.g. remove a feature flag.
- `build` - Commits, that affect build components like build tool, ci pipeline, dependencies, project version etc.
- `ops` - Commits, that affect operational components like infrastructure, deployment, backup etc.

#### Examples

```
feat: add email notifications on new direct messages
```

```
refactor: implement fibonacci number calculation as recursion
```

```
style: remove empty line
```

```
fix: fix wrong calculation of request body checksum
```

---

## Folder and File Naming Convention

### KebabCase

- `Folder names`, `data`, `types`

#### Examples

- `main-layout` - folder
- `auth-user.data.ts` - data
- `auth-user.type.ts` - types

### PascalCase

- `Component name`, `Component file name`, `Prop name`, `Interface Name`, `Type Name`, `Context name`, `Context file name`

#### Examples

```js
const TodoItem = () => {
  ...
}
```

```js
interface TodoItemProps {
  id: number;
  name: string;
  value: string;
}
```

```js
interface TodoItem {
  id: number;
  name: string;
  value: string;
}
```

```js
type TodoItem = {
  id: number,
  name: string,
  value: string,
};
```

```js
export const DialogContext = createContext(null);
```

### CamelCase

- `Hooks name`, `Hooks file name`, `Utility function name`, `Utility function file name`

#### Examples

```js
export function useLocalStorage({ name = "myapp", defaultValue = false }) {
  const defValue = window.localStorage.getItem(name) ?? defaultValue;
  const [value, setVal] = useState(defValue);

  const setValue = (value) => {
    setVal(value);
    window.localStorage.setItem(name, value);
  };

  return {
    value,
    setValue,
  };
}
```

```js
export const objectToUrlParams = (objectParams) => {
  if (typeof objectParams === "object") {
    const params = new URLSearchParams(objectParams);
    return `?${params.toString()}`;
  }
  return "";
};
```

### SnakeCase (Uppercase)

- `Constants`

#### Examples

```js
const API_URL = "https://api.example.com";
```

---

## Variables, Event handlers, CSS classes, Props

#### Variables

> Prefix state variables with is, has, or should to denote boolean values.

- <span style="color:green">✔️</span> Follow

```js
const [isActive, setIsActive] = useState(false);
```

- <span style="color:red">❌</span> Avoid

```js
const [active, setActive] = useState(false);
```

#### Event handlers

> Use handle as a prefix for event handler functions. For example, handleClick, handleInputChange

- <span style="color:green">✔️</span> Follow

```js
const handleButtonClick = () => {
  setIsActive(!isActive);
};
```

- <span style="color:red">❌</span> Avoid

```js
const buttonClick = () => {
  setIsActive(!isActive);
};
```

#### CSS classes

> Use lowercase letters and hyphens for CSS class names. Unless you're using css methodologies like BEM

- <span style="color:green">✔️</span> Follow

```html
<div className="container-wrapper"></div>
```

- <span style="color:red">❌</span> Avoid

```html
<div className="containerwrapper"></div>
<div className="containerWrapper"></div>
<div className="ContainerWrapper"></div>
```

#### Props

> Use descriptive names for props to clearly indicate their purpose.
> Avoid abbreviations or acronyms unless they are widely understood in the context of your project.

- <span style="color:green">✔️</span> Follow

```js
interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  ...
}
```
