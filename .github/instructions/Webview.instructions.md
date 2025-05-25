---
applyTo: "src/webview/**/*"
---
# Webview UI Standards

- Use strict CSP and load resources via `webview.asWebviewUri`.
- Never use inline scripts or `eval`.
- Use Zustand for state management if complex.
- Validate and sanitize all user input.
- Minimize DOM updates for performance.