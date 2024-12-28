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
