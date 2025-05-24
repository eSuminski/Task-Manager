---
applyTo: "**"
---
# Copilot Coding Standards for VS Code Extension

## General Principles
- Follow Microsoft's VS Code extension guidelines for scalability, maintainability, and security.
- Write efficient, readable, and strictly-typed TypeScript code.
- Ensure all code is modular, well-documented, and passes ESLint checks.
- Never allow unrestricted WebView interactions; always use strict Content Security Policy (CSP) and validate all user input.

## Extension Structure
- Organize code into `src/` (logic), `test/` (tests), and `webview/` (UI) directories.
- Register all extension commands in `package.json` under `contributes.commands`.
- Use `vscode.commands.registerCommand` for all commands and provide a test for each in `test/`.
- Use TypeScript interfaces/types for all APIs and data structures.
- Update `README.md` and `CHANGELOG.md` for all new features or fixes.

## Webview UI
- Use `vscode.WebviewPanel` with strict CSP and load all resources via `webview.asWebviewUri`.
- Never use inline scripts or `eval` in Webview code.
- Forbid direct file system access from Webview; use message passing and validate all messages.

## API Design
- Expose REST-like API endpoints for MCP server integration using clear HTTP verbs and status codes.
- All API responses must return `{ success: boolean, data?: any, error?: string }`.
- Document all API endpoints with OpenAPI-style comments.
- Ensure robust error handling and input validation for all endpoints.

## Performance Optimization
- Avoid unnecessary recomputation and memory overhead, especially in Webview elements.
- Use asynchronous handling (`async`/`await`) for all VS Code API calls; never block the extension host.
- Debounce or throttle event listeners where appropriate.
- Forbid synchronous file or workspace operations in the extension host.

## Security
- Validate and sanitize all user input, especially from Webview.
- Use VS Code’s `vscode.workspace.fs` API for file operations; never access the file system directly from Webview.
- Never expose sensitive data or unrestricted commands to Webview.

## Debugging & Testing
- Include unit and integration tests using Jest in `test/`.
- Generate test stubs for all new commands and APIs.
- Require code coverage to be reported and tracked.
- Follow Microsoft’s Debug Adapter Protocol for debugging.
- Provide launch configurations for debugging in `.vscode/launch.json`.

## Documentation & Linting
- Use JSDoc/TSDoc comments for all exported functions, classes, and APIs.
- All code must pass ESLint checks and adhere to the project’s lint rules.