### 1 Frontend

#### 1.1 Technologies

1. [React](https://react.dev/) — a frontend library
2. [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager

#### 1.2 Folder Structure

1. assets - static assets (images, svg ...)
2. libs - shared libraries and utilities

   2.1 components - plain react components

   2.2 enums

   2.3 helpers

   2.4 hooks

   2.5 types

3. redux - actions, reducers, selectors, store, thunks
4. pages - app pages

## 2. How to Run

### 2.1 Manually

1. Create and fill all .env files. These files are:

- apps/frontend/.env

You should use .env.example files as a reference.

1. Install dependencies: `npm install`.

2. Run frontend: `npm run start:dev -w apps/frontend`

### 3. Branch Flow

Use `npm run format` and `npm run lint:fix`. It automatically corrects a certain number of errors.

```
<type>-<short-desc>
```

Examples:

- `feature-add-dashboard`
- `feature-add-user-flow`
- `fix-user-flow`

### 4. Testing

To test functionality you need

1. To create a file with such extension: "some-component.test.tsx" or "some-hook.test.ts".

2. Run command for testing: `npm run test`
