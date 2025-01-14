# Key Concepts

## What is a CDN?

**CDN (Content Delivery Network):**  
A network of servers distributed globally to deliver content faster.

**Purpose:**

- Reduces latency.
- Improves load times.
- Minimizes bandwidth usage by delivering cached files.

---

## Difference Between React and ReactDOM

**React:**

- A library for building UI components.

**ReactDOM:**

- Handles rendering React components to the DOM.
- Manages DOM-specific APIs.

---

## What is `async` and `defer` in `<script>` tags?

- **`async`:**

  - Loads the script asynchronously.
  - Executes the script as soon as it is ready.

- **`defer`:**
  - Loads the script asynchronously.
  - Ensures execution happens in order after the HTML is fully parsed.

---

## Difference Between `react.development.js` and `react.production.js`

- **`react.development.js`:**

  - Contains helpful warnings and error messages.
  - Used during development.

- **`react.production.js`:**
  - Minimized and optimized for better performance.
  - Used in production.

---

## What is `crossorigin` in the `<script>` tag?

Specifies how the browser handles cross-origin requests.

**Common Values:**

- **`anonymous`:** No credentials are sent with the request.
- **`use-credentials`:** Credentials such as cookies or HTTP authentication are sent.

---

## Why is React Known as React?

The name comes from React's concept of **reactive programming**, where the UI updates reactively when the state changes.

---

## Difference Between a Library and a Framework

- **Library:**

  - A collection of functions you can call.
  - You control the flow.
  - Example: React.

- **Framework:**
  - Dictates the flow of the application.
  - Calls your code as needed.
  - Example: Angular.

---

## What is Emmet?

A plugin for writing HTML and CSS quickly using shortcuts.

**Example:**  
`div.container>ul>li*3` generates:

```html
<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

# Difference Between `^` and `~` in `package.json`

When defining dependencies in a `package.json` file, `^` and `~` specify version ranges for the npm package.

## `^` (Caret)

- Allows updates to **minor and patch** versions, but not major versions.
- Example: `"react": "^16.2.0"`
  - Matches: `16.2.1`, `16.3.0`, but not `17.0.0`.

### Why use `^`?

- Useful when you want to automatically get bug fixes and feature updates without introducing breaking changes (major version updates).

---

## `~` (Tilde)

- Allows updates to the **patch** version, but not minor or major versions.
- Example: `"react": "~16.2.0"`
  - Matches: `16.2.1`, `16.2.5`, but not `16.3.0` or `17.0.0`.

### Why use `~`?

- Useful when you want to ensure maximum stability by only allowing patch updates.

---

## Key Difference

| Symbol | Updates Allowed               | Example                            |
| ------ | ----------------------------- | ---------------------------------- |
| `^`    | Minor + Patch (e.g., `x.y.z`) | `^16.2.0` → Updates up to `16.9.x` |
| `~`    | Patch Only (e.g., `x.y.z`)    | `~16.2.0` → Updates up to `16.2.x` |

**Note:** Always consider the semantic versioning (SemVer) of the dependency to ensure compatibility.

````markdown
# Difference Between `package.json` and `package-lock.json`

Both `package.json` and `package-lock.json` are essential files in a Node.js project, but they serve different purposes.

## `package.json`

- **Purpose**: A manifest file that defines the project's metadata, dependencies, and scripts.
- **Key Features**:

  - Lists **declared dependencies** with version ranges.
  - Includes project information like `name`, `version`, `description`, etc.
  - Defines scripts for tasks like `build`, `test`, and `start`.
  - Example:
    ```json
    {
      "name": "my-app",
      "version": "1.0.0",
      "dependencies": {
        "react": "^17.0.2",
        "express": "~4.17.1"
      }
    }
    ```

- **Editable?**: Yes, you manually edit this file.

---

## `package-lock.json`

- **Purpose**: Automatically generated file that records the exact versions of all installed dependencies (and their dependencies).
- **Key Features**:

  - Provides a snapshot of the dependency tree for reproducible builds.
  - Ensures that the same dependency versions are installed across environments.
  - Example:
    ```json
    {
      "name": "my-app",
      "version": "1.0.0",
      "lockfileVersion": 2,
      "dependencies": {
        "react": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react/-/react-17.0.2.tgz",
          "integrity": "sha512-abc..."
        },
        "express": {
          "version": "4.17.1",
          "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
          "integrity": "sha512-def..."
        }
      }
    }
    ```

- **Editable?**: No, this file is auto-generated by npm.

---

## Key Differences

| Aspect                | `package.json`                                     | `package-lock.json`                   |
| --------------------- | -------------------------------------------------- | ------------------------------------- |
| **Purpose**           | Defines project dependencies.                      | Locks exact versions of dependencies. |
| **Versioning**        | Uses version ranges (`^`, `~`).                    | Records exact versions.               |
| **Generated by npm?** | No, created manually.                              | Yes, auto-generated.                  |
| **Editable?**         | Yes.                                               | No.                                   |
| **Impact on Builds**  | May install different versions depending on range. | Ensures exact same versions.          |

---

## Why Both Files are Important

1. **`package.json`**: Defines the intended dependencies and acts as the project setup file.
2. **`package-lock.json`**: Ensures consistent installations across environments, which is crucial for debugging and production builds.

---

## Best Practices

- Always commit both files to version control.
- Run `npm install` to use `package-lock.json` for consistent installations.
- Avoid manually editing `package-lock.json`.
````

# Difference Between `dependencies` and `devDependencies`

In a `package.json` file, both `dependencies` and `devDependencies` specify the packages your project relies on, but they differ in their purpose and usage.

---

## `dependencies`

- **Purpose**: These are packages required for the **runtime** of your application.
- **Key Features**:
  - Necessary for the application to function in production.
  - Includes libraries/frameworks used directly in the codebase.
  - Example:
    ```json
    {
      "dependencies": {
        "react": "^17.0.2",
        "express": "^4.17.1"
      }
    }
    ```
- **Installation Command**: Installed with `npm install` (default).

---

## `devDependencies`

- **Purpose**: These are packages used **only during development**.
- **Key Features**:
  - Not required in production builds.
  - Includes tools like testing frameworks, linters, and build tools.
  - Example:
    ```json
    {
      "devDependencies": {
        "jest": "^27.0.0",
        "eslint": "^7.32.0"
      }
    }
    ```
- **Installation Command**: Installed with `npm install --only=dev` (not commonly used).

---

## Key Differences

| Aspect                 | `dependencies`                           | `devDependencies`                       |
| ---------------------- | ---------------------------------------- | --------------------------------------- |
| **Purpose**            | Required at runtime.                     | Used during development only.           |
| **Example Packages**   | Frameworks like React, Express.          | Linters, test frameworks, etc.          |
| **Production Build**   | Included in production builds.           | Excluded from production builds.        |
| **Default Install**    | Installed by default with `npm install`. | Excluded unless `NODE_ENV=development`. |
| **Command to Install** | `npm install package-name`               | `npm install package-name --save-dev`   |

---

```markdown
# Explanation of HMR, File Watcher, and Dist Folder

## 1. **HMR (Hot Module Replacement)**

- **Definition**: HMR is a feature in modern development tools like Webpack, Vite, and Parcel that allows modules (e.g., JavaScript, CSS) to be updated **in the browser without a full page reload**.
- **How It Works**:
  - Watches for changes in the source code.
  - Sends updated modules to the browser.
  - Injects new code into the application while preserving the current state (e.g., UI state, app data).
- **Benefits**:
  - Faster development cycle (no need for a full page refresh).
  - Retains application state during updates.
  - Improves developer experience, especially in React/Angular apps.
- **Example**: If you change a CSS file, the new styles are injected directly into the page without reloading it.

---

## 2. **File Watcher**

- **Definition**: A tool or feature that monitors files in a project for changes and triggers specific actions when changes are detected.
- **Usage in Development**:
  - Automatically recompiles code when you save a file.
  - Triggers tasks like bundling, testing, or restarting the server.
- **How It Works**:
  - Uses a library or system features to detect changes (e.g., `fs.watch` in Node.js).
  - Reacts to events like file creation, modification, or deletion.
- **Examples**:
  - **Webpack**: Rebuilds the project on file changes.
  - **Nodemon**: Restarts a Node.js application when files change.
  - **ESLint/Prettier**: Automatically lints or formats files on save.
- **Benefits**:
  - Eliminates the need for manual rebuilds or restarts.
  - Speeds up the development process.

---

## 3. **Dist Folder**

- **Definition**: The `dist` folder (short for "distribution") contains the final, production-ready files of your application after they’ve been built or bundled.
- **Key Features**:
  - Contains optimized and minified files (e.g., JavaScript, CSS, images).
  - Serves as the entry point for deployment to production.
  - Typically ignored in version control (e.g., added to `.gitignore`).
- **How It’s Generated**:
  - A build tool like Webpack, Vite, or Parcel processes the source files.
  - The output is written to the `dist` folder.
- **Contents**:
  - Bundled JavaScript and CSS files.
  - Minified and optimized assets (e.g., images, fonts).
  - HTML files with updated script/style references.
- **Example**:
  - Source folder: `src/index.js`
  - Distribution folder: `dist/main.js` (after bundling and optimization).

---

## Summary Table

| Term             | Definition                                                 | Example Usage                  | Benefit                                   |
| ---------------- | ---------------------------------------------------------- | ------------------------------ | ----------------------------------------- |
| **HMR**          | Updates modules in the browser without reloading the page. | CSS hot reloading in React.    | Faster development, preserves app state.  |
| **File Watcher** | Monitors files for changes and triggers specific actions.  | Webpack rebuilds on save.      | Automates tasks, speeds up development.   |
| **Dist Folder**  | Contains production-ready, bundled, and optimized files.   | Deploying `dist/` to a server. | Provides optimized assets for production. |
```

# Webpack: A Comprehensive Overview

## What is Webpack?

- **Webpack** is a popular JavaScript module bundler and build tool for modern web applications.
- It processes your project's files (JavaScript, CSS, images, etc.) and bundles them into a single or multiple optimized files for production.

---

## Core Features of Webpack

### 1. **Module Bundling**

- Combines multiple JavaScript files (and other assets) into one or more bundles.
- Handles `import` and `require` statements to resolve dependencies.

---

### 2. **Loaders**

- Transforms non-JavaScript files (e.g., CSS, images, TypeScript) into modules that Webpack can include in the dependency graph.
- Examples:
  - `css-loader`: Loads CSS files.
  - `file-loader`: Handles image files.
  - `babel-loader`: Transpiles modern JavaScript (ES6+) to older versions for compatibility.

---

### 3. **Plugins**

- Extend Webpack's capabilities beyond module bundling.
- Examples:
  - `HtmlWebpackPlugin`: Generates an HTML file with script tags for your bundled files.
  - `TerserPlugin`: Minifies JavaScript for production.
  - `MiniCssExtractPlugin`: Extracts CSS into separate files.

---

### 4. **Code Splitting**

- Splits code into multiple bundles to optimize loading.
- Helps lazy-load parts of the application, reducing initial load time.
- Example: Splitting vendor libraries (like React) from application code.

---

### 5. **Tree Shaking**

- Removes unused code (dead code) during the build process.
- Works with ES6 modules (`import/export`).
- Reduces the size of the final bundle.

---

### 6. **Asset Optimization**

- Optimizes assets such as images, CSS, and JavaScript for better performance.
- Example:
  - Compresses images.
  - Minifies JavaScript and CSS files.

---

### 7. **Development Server**

- Webpack Dev Server provides a development environment with:
  - **Hot Module Replacement (HMR)** for live reloading.
  - **File Watching** to detect and rebuild on changes.

---

### 8. **Output Management**

- Outputs bundled files into a specified folder (e.g., `dist/`).
- Manages hash filenames for cache-busting in production.

---

## How Webpack Works

1. **Entry Point**:

   - Specifies the starting file (e.g., `src/index.js`) for building the dependency graph.

2. **Dependency Graph**:

   - Analyzes all imports/exports to create a graph of dependencies.

3. **Loaders**:

   - Transforms and processes files.

4. **Plugins**:

   - Performs tasks like optimization and asset injection.

5. **Output**:
   - Produces the final optimized bundle(s) in the specified folder.

---

## Benefits of Using Webpack

- Handles all assets (JS, CSS, images) as modules.
- Optimizes code for production.
- Simplifies dependency management.
- Enables advanced features like HMR, code splitting, and tree shaking.

---

## Example Webpack Configuration

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Injects bundles into HTML
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true, // Enable HMR
  },
}
```

```markdown
# Transitive Dependencies - Short Notes

## Definition

- **Transitive dependencies**: Indirect dependencies required by your direct dependencies.

---

## Key Points

- Installed automatically when a package is installed.
- Forms a hierarchical **dependency tree**.
- Managed by npm/yarn transparently.

---

## Problems

1. **Version Conflicts**: Different packages requiring incompatible versions.
2. **Security Issues**: Vulnerabilities in transitive dependencies.
3. **Breaking Changes**: Updates may introduce incompatibilities.

---

## Best Practices

- Use **lockfiles** (`package-lock.json`, `yarn.lock`) for consistent versions.
- Run **audit tools** (e.g., `npm audit`) to find vulnerabilities.
- Override versions if necessary using `resolutions` in `package.json`.

---

## Tools

- `npm list`: Displays the dependency tree.
- `npm audit`: Checks for security vulnerabilities.
```

````markdown
# Script Types and When to Use Them

## 1. Default (`text/javascript`)

- **When to Use**: For standard JavaScript code.
- **Example**:
  ```html
  <script src="app.js"></script>
  ```
````

## 2. Module (`module`)

- **When to Use**: For ES6 modules with `import/export`.
- **Example**:
  ```html
  <script type="module" src="app.js"></script>
  ```

## 3. JSON (`application/json`)

- **When to Use**: To embed JSON data for JavaScript to parse.
- **Example**:
  ```html
  <script type="application/json" id="data"></script>
  ```

## 4. Non-Executable (`text/x-template`)

- **When to Use**: For templates or data that shouldn’t execute in the browser.
- **Example**:
  ```html
  <script type="text/x-template" id="template"></script>
  ```

## 5. Structured Data (`application/ld+json`)

- **When to Use**: To add metadata for SEO or structured data purposes.
- **Example**:
  ```html
  <script type="application/ld+json"></script>
  ```

## 6. Web Worker (`text/worker`)

- **When to Use**: For scripts used in web workers.
- **Example**:
  ```html
  <script type="text/worker" src="worker.js"></script>
  ```

````
```markdown
# Theory Assignment

## 1. What is `NPM`?
- **NPM (Node Package Manager)**: A package manager for JavaScript that allows developers to share, install, and manage code packages.
- **Uses**:
  - Install libraries and tools.
  - Manage project dependencies.
  - Share reusable code as packages.

---

## 2. What is `Parcel`/`Webpack`? Why do we need it?
- **Parcel/Webpack**: Bundlers that process and optimize web assets (JavaScript, CSS, images) into production-ready files.
- **Why We Need It**:
  - Handles dependency management.
  - Optimizes assets (e.g., minification, code splitting).
  - Supports modern JavaScript (via transpilers like Babel).

---

## 3. What is `.parcel-cache`?
- **`.parcel-cache`**: A folder created by Parcel to store build artifacts and speed up subsequent builds by avoiding redundant processing.

---

## 4. What is `npx`?
- **npx**: A tool that runs Node.js packages without globally installing them.
- **Example**:
  ```bash
  npx create-react-app my-app
````

---

## 5. What is the difference between `dependencies` vs `devDependencies`?

- **`dependencies`**:
  - Needed for the application to run in production.
  - Example: `react`, `express`.
- **`devDependencies`**:
  - Needed only for development (e.g., testing, linting tools).
  - Example: `jest`, `eslint`.

---

## 6. What is Tree Shaking?

- **Tree Shaking**: A technique to remove unused code from JavaScript bundles, reducing bundle size.

---

## 7. What is Hot Module Replacement (HMR)?

- **HMR**: Updates modules in the browser without a full reload, preserving the app's state during development.

---

## 8. List your favorite 5 superpowers of Parcel and describe any 3.

### Favorite Superpowers:

1. Zero Configuration.
2. Built-in HMR.
3. Faster builds with caching.
4. Code splitting.
5. Support for multiple file types (e.g., JS, CSS, images).

### Descriptions:

- **Zero Configuration**: Parcel requires no configuration to start bundling, making it beginner-friendly.
- **Built-in HMR**: Automatically updates changes in the browser during development.
- **Faster Builds**: Caching significantly reduces build times for incremental changes.

---

## 9. What is `.gitignore`?

- **`.gitignore`**: A file specifying which files/folders Git should ignore.
- **Add**: `node_modules`, `.parcel-cache`, `.env`.
- **Do Not Add**: Source files, configuration files.

---

## 10. What is the difference between `package.json` and `package-lock.json`?

- **`package.json`**:
  - Defines project metadata and declared dependencies.
- **`package-lock.json`**:
  - Records exact versions of installed dependencies for consistent builds.

---

## 11. Why should I not modify `package-lock.json`?

- **Reason**: It ensures reproducible builds by locking dependency versions. Manual edits may break consistency.

---

## 12. What is `node_modules`? Is it a good idea to push that on Git?

- **`node_modules`**: A folder containing all installed dependencies.
- **Do Not Push to Git**: It is large and can be regenerated using `package.json`.

---

## 13. What is the `dist` folder?

- **`dist` (Distribution Folder)**: Contains production-ready files (bundled, minified, optimized) for deployment.

---

## 14. What is `browserslist`?

- **Browserslist**: A configuration to specify target browsers for tools like Babel and autoprefixer.

---

## 15. Read About Different Bundlers

- **Vite**: A fast bundler with modern tooling, optimized for development.
- **Webpack**: A widely used bundler with powerful plugins and configuration options.
- **Parcel**: A zero-config bundler focused on simplicity and speed.

---

## 16. Read About `^` (Caret) and `~` (Tilde)

- **Caret (`^`)**: Allows updates to minor and patch versions.
  - Example: `^1.2.0` → Updates to `1.x.x`.
- **Tilde (`~`)**: Allows updates to patch versions only.
  - Example: `~1.2.0` → Updates to `1.2.x`.

---

## 17. Script Types in HTML (MDN Docs)

- **`text/javascript`**: Default JavaScript.
- **`module`**: ES6 modules with `import/export`.
- **`application/json`**: Embeds JSON data.
- **`text/x-template`**: Non-executable templates.
- **`application/ld+json`**: Metadata for SEO.

````

```markdown
# Polyfills

## What is a Polyfill?
- **Definition**: A polyfill is a piece of code (typically JavaScript) that provides modern functionality on older browsers or environments that do not natively support it.
- **Purpose**: To bridge the gap between modern JavaScript features and older browser capabilities.

---

## How Polyfills Work
- Detect if a browser supports a specific feature.
- If not supported, the polyfill implements the functionality using older JavaScript.

---

## Common Scenarios for Using Polyfills
1. **New JavaScript Features**:
   - Example: `Promise`, `Array.prototype.includes`, `Object.assign`.
2. **APIs**:
   - Example: `fetch` API for HTTP requests.
3. **DOM Methods**:
   - Example: `Element.closest`.

---

## Examples of Polyfills

### 1. For `Array.prototype.includes`
If an older browser doesn’t support `includes`:
```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}
````

### 2. For `fetch`

If `fetch` is not supported:

- Use a library like `whatwg-fetch` or `axios`.

---

## Tools for Polyfills

1. **Core-js**: Provides polyfills for ECMAScript features.
2. **Babel**:
   - Automatically includes polyfills when using `@babel/preset-env` with a `browserslist` configuration.
   - Example:
     ```javascript
     npm install @babel/polyfill
     ```

---

## When to Use Polyfills

- When targeting older browsers that lack support for essential features.
- To ensure a consistent user experience across environments.

---

## Best Practices

1. Use tools like **Babel** to automatically include polyfills based on the target browser list.
2. Avoid manually adding polyfills unless necessary to prevent bloating your application.

````

```markdown
# Keys in React

## What are Keys in React?
- **Keys** are unique identifiers used by React to efficiently update and render list items.
- They help React identify which items have changed, been added, or removed in a list.

---

## Why Use Keys?
- Enhance **performance** during rendering.
- Help maintain the **state** of elements in lists.
- Avoid unnecessary DOM updates.

---

## How to Use Keys?
1. Assign a `key` prop to each element in a list:
   ```jsx
   const items = ['Apple', 'Banana', 'Cherry'];
   return (
       <ul>
           {items.map((item, index) => (
               <li key={index}>{item}</li>
           ))}
       </ul>
   );
````

2. Use **unique values** for keys:
   - Prefer **unique IDs** over indexes when available.
   - Example:
     ```jsx
     const items = [
       { id: 1, name: 'Apple' },
       { id: 2, name: 'Banana' },
       { id: 3, name: 'Cherry' },
     ]
     return (
       <ul>
         {items.map((item) => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     )
     ```

---

## Best Practices for Keys

1. **Use Unique Identifiers**: Always use unique and stable IDs for keys.
2. **Avoid Using Index as Key** (if possible):
   - Using indexes can cause issues with:
     - Performance.
     - Component state preservation.
     - Unexpected behavior when reordering items.
3. **Keys Should Be Consistent**: Ensure keys remain the same for the same elements across renders.

---

## Common Mistakes

1. **Not Providing Keys**: React may show a warning in the console.

   - Example of incorrect usage:
     ```jsx
     {
       items.map((item) => <li>{item}</li>)
     }
     ```

2. **Using Non-Unique Keys**: Can lead to incorrect rendering.
   - Example:
     ```jsx
     <ul>
         <li key="1">Apple</li>
         <li key="1">Banana</li> <!-- Duplicate key -->
     </ul>
     ```

---

## Summary

- Keys are **essential** for identifying elements in a list.
- They improve React's rendering efficiency and help preserve the state of components.
- Use **unique IDs** and avoid using array indexes as keys unless the list is static and won't change.

---

````markdown
# Redux: A State Management Library for JavaScript Apps

**Redux** is a library for managing **global application state**. It is often used with React to help manage state in larger applications where passing props becomes cumbersome. Redux provides a centralized store to hold the application state and enables actions to change the state in a predictable way.

## Key Points to Remember About Redux:

### 1. **Single Source of Truth**:

- The state of the entire application is stored in a **single store**.
- This makes it easier to manage and debug the application state, especially in large applications.

### 2. **Actions**:

- Actions are plain **JavaScript objects** that describe **what happened** (e.g., a user clicked a button or fetched some data).
- Actions have a **type** property that defines the action type, and optionally other data (payload) that the action carries.

### 3. **Reducers**:

- Reducers are **pure functions** that take the current state and an action and return a new state.
- Reducers define **how the state should change** based on the action.

### 4. **Store**:

- The **store** is the central object in Redux that holds the application state.
- The state is only modified by dispatching actions, which are processed by reducers.

### 5. **Dispatch**:

- To modify the state, **actions** are **dispatched** to the store.
- Dispatching an action will trigger the reducer to process the action and update the state accordingly.

### 6. **Selector**:

- Selectors are functions that help extract data from the Redux store to pass to components.

## Basic Flow in Redux:

1. **Dispatch an Action**: Trigger an action to update the state.
2. **Reducer Processes the Action**: The reducer receives the action and updates the state.
3. **New State in Store**: The new state is stored in the store.
4. **Component Re-renders**: Components connected to the store automatically re-render with the updated state.

## Example Scenario: Todo Application

We will build a **Todo application** where users can add and remove todos using Redux to manage the state.

### **Step 1: Install Redux and React-Redux**

```bash
npm install redux react-redux
```
````

### **Step 2: Define Actions**

Actions are used to describe what happened in the app (e.g., adding a todo, removing a todo).

```js
// actions.js
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
})

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
})
```

### **Step 3: Define Reducer**

Reducers define how the state should change based on the action type.

```js
// reducer.js
const initialState = {
  todos: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}

export default todoReducer
```

### **Step 4: Create Redux Store**

The store holds the state and applies the reducer.

```js
// store.js
import { createStore } from 'redux'
import todoReducer from './reducer'

const store = createStore(todoReducer)

export default store
```

### **Step 5: Provide Redux Store to React Application**

Wrap the application with the **Provider** component from `react-redux` to give access to the Redux store.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### **Step 6: Connect React Component to Redux Store**

Use `useSelector` to read from the store and `useDispatch` to dispatch actions.

```js
// App.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './actions'

const App = () => {
  const [input, setInput] = useState('')
  const todos = useSelector((state) => state.todos) // Read state from store
  const dispatch = useDispatch() // Access dispatch function

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), text: input }
      dispatch(addTodo(newTodo)) // Dispatch action to add todo
      setInput('')
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)) // Dispatch action to remove todo
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

### **Step 7: Run the Application**

Now, you can run your application. It should allow you to add and remove todos using Redux to manage the state.

```bash
npm start
```

## Key Points to Remember About Redux:

1. **Single Source of Truth**: The entire state is stored in one place (the store).
2. **Actions**: Used to describe what happened (e.g., adding/removing items).
3. **Reducers**: Functions that specify how the state changes in response to actions.
4. **Store**: Holds the application's state and provides methods like `getState()` and `dispatch()`.
5. **Dispatching Actions**: Use `dispatch()` to send actions that will change the state.
6. **Selectors**: Functions to access specific pieces of state in the store.

## Easy Memory Tip:

- **"Redux"** = **"Manage state like a "reducer"**.
- **Store** holds everything, **Actions** tell us what happened, **Reducers** process actions, and the **Component** reflects the state.

```

```
