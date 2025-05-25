---
applyTo: "src/**/*.ts"
---
# TypeScript Coding Standards

- Write efficient, readable, and strictly-typed TypeScript code.
- Ensure all code is modular, well-documented, and passes ESLint checks.
- Use TypeScript interfaces/types for all APIs and data structures.
- Use JSDoc/TSDoc comments for all exported functions, classes, and APIs.
- All code must pass ESLint checks and adhere to the project’s lint rules.
- Prefer async/await for asynchronous operations; never use blocking or synchronous code in the extension host.
- Avoid blocking the extension host; use VS Code APIs for persistence and file operations.
- Register all commands in `package.json` and provide tests in `src/test/`.
- Use `const` and `readonly` for immutability where possible.
- Prefer functional programming principles and pure functions.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe property access.
- Avoid using `any`; prefer explicit types and generics.
- Use consistent naming conventions: camelCase for variables/functions, PascalCase for types/classes.
- Group related code into modules and keep files focused and small.
- Handle errors with try/catch and provide meaningful error messages.
- Write unit and integration tests for all logic and commands.
- Avoid side effects in modules; prefer dependency injection for testability.
- Use VS Code's `Memento` for persistent state.
- Never expose sensitive data or unrestricted commands to the Webview.
- Use relative imports within the project; avoid deep import paths.
- Keep all code compatible with the project's `tsconfig.json` settings.