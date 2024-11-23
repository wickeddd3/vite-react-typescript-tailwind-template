## Folder Structure

- `src` - main source code
- `src/assets` - for anything that isn't code related like images, styles, fonts, etc.
  - `src/assets/css` - for css files.
- `src/components` - for components that can be reuse in the entire app
  - `src/components/layouts` - for layout based components
  - `src/components/ui` - for shadcnui components
- `src/constants` - for constant values
- `src/contexts` - for app react context
- `src/hooks` - for react custom hooks
- `src/lib` - for third party facades of different library
- `src/pages` - for app component pages
  - `src/pages/dashboard` - for dashboard related/specific files
    - `src/pages/dashboard/Dashboard.tsx` - dashboard page main component
    - `src/pages/dashboard/components` - for dashboard specific components
    - `src/pages/dashboard/types` - for dashboard specific types
- `src/router` - for app routes
- `src/services` - for api request related functions
- `src/store` - for app state management
  - `src/store/index.ts` - store main file
  - `src/store/slices` - for store slices
  - `src/store/slices/thunks` - for store slice thunks
  - `src/store/slices/extra-reducers` - for store slice extra-reducers
  - `src/store/slices/reducers.ts` - for store slice reducers
  - `src/store/slices/state.ts` - for store slice initial state
  - `src/store/slices/types` - for store slice state types
- `src/tests` - for anything tests related like unit and e2e tests
  - `src/tests/unit` - for unit tests
  - `src/tests/e2e` - for e2e tests
- `src/utils` - for reusable utility functions
- `src/types` - for global types

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

- `Folder names`, `data`, `types`, `Hook file name`, `Utility function file name`

#### Examples

- `main-layout` - folder
- `auth-user.data.ts` - data
- `auth-user.type.ts` - types
- `use-mobile` - hooks
- `object-to-url-params` - utility function

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

- `Hooks name`, `Utility function name`

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
