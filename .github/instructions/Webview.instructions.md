---
applyTo: "src/webview/**/*"
---
# Webview UI Standards

- Use strict CSP and load resources via `webview.asWebviewUri`.
- Never use inline scripts or `eval`.
- Load initial state from VS Code workspace storage API and persist changes back (debounced/throttled).
- Validate and sanitize all user input.
- Minimize DOM updates for performance.
- Communicate with the extension host using the VS Code message API; always validate messages.
- Never block the extension host—process all data and API calls asynchronously.
- Bundle React and all scripts locally; do not use remote CDNs.

# React Standards

- Use functional components and React hooks (`useState`, `useReducer`, `useEffect`).
- Keep components small, focused, and reusable.
- Use React Context for global state if needed.
- Write unit tests for components (Jest + React Testing Library).
- Use ESLint and Prettier for code quality and consistency.
- Debounce or throttle UI events that trigger expensive operations.
- Design for accessibility and responsiveness.
- Use VS Code’s design language and color themes for a native look and feel.
- Sanitize all data sent to and from the Webview.
- Document all modules and update `README.md` and `CHANGELOG.md` for new features or fixes.
