---
applyTo: "**"
---
# Best Practices for VS Code Extension Development

## Extension Lifecycle & Activation
- Use activation events such as `onCommand` or `workspaceContains` only when needed.
- Avoid unnecessary global activation to reduce resource usage.

## Webview Implementation
- Use the Webview API for all custom UI.
- Always set a strict Content Security Policy (CSP) and restrict resources using `cspSource`.
- Never allow inline scripts or unrestricted resource loading in Webview.

## State Management
- Use VS Code's persistent workspace state or `Memento` for storing extension data.
- Prefer Redux or Zustand for complex UI state management in Webview.

## API & MCP Integration
- Use REST for standard API actions and WebSocket for real-time updates.
- Authenticate all API endpoints (e.g., with JWT or API keys).
- Validate all incoming API data.

## Performance Considerations
- Minimize DOM updates in Webview to optimize rendering.
- Use Web Workers for background processing when needed.
- Debounce or throttle event listeners to avoid excessive computation.

## Security Measures
- Restrict Webview resources to only those required.
- Validate and sanitize all API and user input to prevent injection vulnerabilities.

## Recommended Development Tools
- Use ESLint and Prettier for linting and formatting.
- Use Jest for unit testing.
- Use the VS Code Debug Adapter for live debugging.