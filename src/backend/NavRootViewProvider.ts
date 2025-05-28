import * as vscode from 'vscode';

export class NavRootViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'taskManagerNavRoot';

  constructor(private readonly context: vscode.ExtensionContext) {}

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri]
    };
    webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
    // TODO: Add message handling for button actions
  }

  private getHtmlForWebview(webview: vscode.Webview): string {
    // Simple HTML with a button for demonstration
    const cspSource = webview.cspSource;
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${cspSource} https:; script-src 'nonce-1234'; style-src ${cspSource};">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nav Root</title>
      </head>
      <body>
        <div id="root"></div>
        <button id="createBoard">Create New Task Board</button>
        <script nonce="1234">
          document.getElementById('createBoard').addEventListener('click', () => {
            const vscode = acquireVsCodeApi();
            vscode.postMessage({ command: 'createTaskBoard' });
          });
        </script>
      </body>
      </html>
    `;
  }
}
