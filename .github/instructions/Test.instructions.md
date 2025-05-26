---
applyTo: "src/test/**/*"
---
# Testing Standards

- Use Jest for all unit and integration tests.
- Mock VS Code APIs and external services.
- Isolate tests and avoid side effects.
- Use descriptive test names and maintain clear structure.
- Ensure each command and API endpoint has corresponding unit and integration tests.
- Never allow unmocked file system or network access in tests.
- Simulate MCP requests to validate API reliability and error handling.
- Check response consistency, status codes, and error messages in API tests.
- Enable detailed logging for API requests and extension errors during test runs.
- Use VS Code Developer Tools for Webview debugging when needed.
- Use ESLint to enforce code style in test files.
- Update tests and coverage reports for all new features and bug fixes.
- Maintain high code coverage and track it with coverage reports.
- Use dependency injection and mocks to avoid global state pollution.
- Prefer `beforeEach`/`afterEach` hooks for setup and teardown.
- Keep test files small and focused on a single module or feature.
- Document complex test cases with comments for clarity.
- Generate test stubs for all new commands and APIs.
- Require code coverage to be reported and tracked.
- Follow Microsoft’s Debug Adapter Protocol for debugging.
- Provide launch configurations for debugging in `.vscode/launch.json`.