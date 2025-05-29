// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TaskBoardTreeProvider } from './backend/TaskBoardTreeProvider';

/**
 * Called when your extension is activated. This happens the very first time the command is executed.
 * @param context The extension context provided by VS Code.
 */
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "task-manager" is now active!');

	/**
	 * Registers the helloWorld command and shows the welcome webview panel.
	 */
	const disposable = vscode.commands.registerCommand('task-manager.helloWorld', () => {
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

	/**
	 * Registers the TaskBoardTreeProvider for the tree view.
	 */
	const taskBoardProvider = new TaskBoardTreeProvider(context);
	vscode.window.registerTreeDataProvider('taskManagerNavRoot', taskBoardProvider);

	/**
	 * Registers the createTaskBoard and deleteTaskBoard commands for creating and deleting boards.
	 */
	context.subscriptions.push(
		vscode.commands.registerCommand('task-manager.createTaskBoard', async () => {
			const name = await vscode.window.showInputBox({ prompt: 'Enter board name' });
			if (name) {
				const boards = taskBoardProvider.boards;
				boards.push({
					label: name,
					columns: [
						{ label: 'Backlog', tasks: [] },
						{ label: 'In Progress', tasks: [] },
						{ label: 'Done', tasks: [] }
					]
				});
				taskBoardProvider.boards = boards;
				taskBoardProvider.refresh();
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('task-manager.deleteTaskBoard', async (boardLabel: string) => {
			const confirm = await vscode.window.showWarningMessage(
				`Are you sure you want to delete the board "${boardLabel}"? This action cannot be undone.`,
				{ modal: true },
				'Delete'
			);
			if (confirm === 'Delete') {
				const boards = taskBoardProvider.boards.filter((b: any) => b.label !== boardLabel);
				taskBoardProvider.boards = boards;
				taskBoardProvider.refresh();
				vscode.window.showInformationMessage(`Board "${boardLabel}" deleted.`);
			}
		})
	);
}

/**
 * Returns the HTML content for the webview panel.
 * @param webview The webview instance.
 * @param extensionUri The URI of the extension root.
 * @returns The HTML string for the webview.
 */
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

/**
 * Called when your extension is deactivated.
 */
export function deactivate() {}
