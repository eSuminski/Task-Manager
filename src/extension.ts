// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "task-manager" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('task-manager.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		const panel = vscode.window.createWebviewPanel(
			'taskManagerWelcome',
			'Task Manager',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
				// Add strict CSP and other options as needed
			}
		);

		panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);
	});

	context.subscriptions.push(disposable);

	// Register the sidebar WebviewView
	const provider = new TaskManagerViewProvider(context);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(TaskManagerViewProvider.viewType, provider)
	);
}

class TaskManagerViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'taskManagerView';
	constructor(private readonly context: vscode.ExtensionContext) {}

	resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken
	) {
		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [this.context.extensionUri]
		};
		webviewView.webview.html = getWebviewContent(webviewView.webview, this.context.extensionUri);
	}
}

function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
	const scriptUri = webview.asWebviewUri(
		extensionUri.with({
			path: extensionUri.path + '/out/webview/index.js'
		})
	);

	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-eval' 'unsafe-inline' ${webview.cspSource};">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Task Manager</title>
		</head>
		<body>
			<div id="root"></div>
			<script src="${scriptUri}"></script>
		</body>
		</html>
	`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
