import * as vscode from 'vscode';

/**
 * The default columns for the task board: Backlog, In Progress, and Done.
 * Each column contains an array of tasks.
 */
const DEFAULT_COLUMNS = [
  { label: 'Backlog', tasks: [] },
  { label: 'In Progress', tasks: [] },
  { label: 'Done', tasks: [] }
];

/**
 * Represents a tree item in the task board tree view.
 * Can be a board, column, or task.
 */
class TaskTreeItem extends vscode.TreeItem {
  /**
   * Creates a new TaskTreeItem.
   * @param label The display label for the item.
   * @param collapsibleState The collapsible state of the item.
   * @param contextValue The context value (e.g., 'board', 'column', 'task').
   * @param iconPath Optional icon for the item.
   * @param command Optional command to execute when the item is clicked.
   */
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly contextValue: string,
    public readonly iconPath?: vscode.ThemeIcon | vscode.Uri | { light: vscode.Uri; dark: vscode.Uri },
    public readonly command?: vscode.Command
  ) {
    super(label, collapsibleState);
    if (iconPath) {
      this.iconPath = iconPath;
    }
    if (command) {
      this.command = command;
    }
  }
}

/**
 * Provides data for the navigation root tree view (task boards, columns, and tasks).
 * Implements VS Code's TreeDataProvider interface for TaskTreeItem nodes.
 */
export class TaskBoardTreeProvider implements vscode.TreeDataProvider<TaskTreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<TaskTreeItem | undefined>();
  /**
   * Event that fires when the tree data changes.
   */
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  /**
   * Creates a new NavRootViewProvider.
   * @param context The extension context for accessing workspace state.
   */
  constructor(private context: vscode.ExtensionContext) {}

  /**
   * Gets the list of boards from workspace state.
   */
  get boards(): any[] {
    return this.context.workspaceState.get('boards', []);
  }

  /**
   * Sets the list of boards in workspace state.
   */
  set boards(val: any[]) {
    this.context.workspaceState.update('boards', val);
  }

  /**
   * Refreshes the tree view by firing the change event.
   */
  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  /**
   * Returns the children for a given tree item.
   * @param element The parent tree item, or undefined for root level.
   * @returns An array of TaskTreeItems representing boards, columns, or tasks.
   */
  getChildren(element?: TaskTreeItem): vscode.ProviderResult<TaskTreeItem[]> {
    if (!element) {
      // Top level: boards
      return this.boards.map(
        board => new TaskTreeItem(
          board.label,
          vscode.TreeItemCollapsibleState.Collapsed,
          'board'
          // Removed iconPath and command for trash icon; context menu will handle delete
        )
      );
    }
    // Find board
    const board = this.boards.find(b => b.label === element.label);
    if (element.contextValue === 'board' && board) {
      // Board level: columns
      return board.columns.map(
        (col: any) => new TaskTreeItem(col.label, vscode.TreeItemCollapsibleState.Collapsed, 'column')
      );
    }
    // Find column
    for (const b of this.boards) {
      const col = b.columns.find((c: any) => c.label === element.label);
      if (element.contextValue === 'column' && col) {
        // Column level: tasks
        return col.tasks.map(
          (task: any) => new TaskTreeItem(task.label, vscode.TreeItemCollapsibleState.None, 'task')
        );
      }
    }
    return [];
  }

  /**
   * Returns the TreeItem representation for the given element.
   * @param element The TaskTreeItem to display.
   * @returns The TreeItem for the VS Code tree view.
   */
  getTreeItem(element: TaskTreeItem): vscode.TreeItem {
    return element;
  }
}
