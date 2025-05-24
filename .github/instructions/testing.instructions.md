---
applyTo: "**"
---
# Testing Guidelines for VS Code Extension

## Unit Testing
- Use Jest for all function-based and logic tests in the `test/` directory.
- Ensure each command and API endpoint has corresponding unit and integration tests.
- Mock VS Code APIs and MCP server responses as needed.

## Webview Testing
- Use Playwright for automated Webview UI interaction tests.
- Validate DOM structure and task rendering in the Webview.
- Never allow unmocked file system or network access in Webview tests.

## MCP Server Communication
- Simulate MCP requests to validate task API reliability and error handling.
- Check response consistency, status codes, and error messages.

## Debugging Strategies
- Enable detailed logging for API requests and extension errors.
- Use VS Code Developer Tools for Webview debugging.
- Run `code --inspect` to debug the extension runtime.

## Best Practices
- Isolate tests and avoid side effects between them.
- Use descriptive test names and maintain clear test structure.
- Update tests and coverage reports for all new features and bug fixes.