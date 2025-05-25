---
applyTo: "**"
---

# VS Code Extension Architecture Standards

## SRS Requirements Overview
- Core Features: Add, edit, delete, and display tasks within VS Code.
- Optional: Synchronize tasks with an MCP server.
- UI: Kanban board or list view, modular and testable state management.
- Data Persistence: Use VS Code workspace storage APIs; persist state across sessions.
- Security: Strict Content Security Policy for Webviews; validate and sanitize all user input.
- Performance: Never block the extension host; process API/task modifications asynchronously.
- Quality: All code must pass ESLint and Jest tests.
- System Interfaces: Use the VS Code API; document and validate all MCP integration points.
- Compliance: Follow VS Code extension guidelines and Copilot Coding Standards.

## System Components
- Use `vscode.WebviewPanel` with strict CSP and message validation for all Webview UIs.
- Expose task board actions via REST or WebSocket endpoints with clear HTTP verbs and structured responses: `{ success: boolean, data?: any, error?: string }`.
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

# Documentation
- Follow the documentation standards in `.github/instructions/Markdown.instructions.md` for all Markdown files, including clear language, consistent heading levels, and formatting.
- Update `README.md` and `CHANGELOG.md` for all new features or fixes.