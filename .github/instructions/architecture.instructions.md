---
applyTo: "**"
---
# VS Code Extension Architecture Standards

## System Components
- Use `vscode.WebviewPanel` with strict CSP and message validation for all Webview UIs.
- Organize UI as a Kanban board; manage UI state in a modular, testable way.
- Expose task board actions via REST or WebSocket endpoints with clear HTTP verbs and structured responses: `{ success: boolean, data?: any, error?: string }`.
- Document and validate all MCP server integration points.
- Secure all automation endpoints and validate all incoming data.

## Data Flow
- Debounce or throttle UI events as needed.
- Process all API and task modifications asynchronously; never block the extension host.
- Authenticate and validate all MCP server requests.
- Persist state across sessions using VS Code's `Memento` or workspace storage APIs.

## Extension Lifecycle
- Register all commands in `package.json` and use `vscode.commands.registerCommand`.
- Persist tasks efficiently using VS Code APIs; avoid synchronous operations.
- Provide launch configurations for debugging in `.vscode/launch.json`.

## Scalability
- Design APIs and data models for extensibility and future multi-user collaboration.
- Document and test all new modules.