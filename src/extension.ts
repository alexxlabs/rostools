// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

/* ---------------------------------------------
Для регистрации команд существует два метода:

registerTextEditorCommand — регистрирует команду в контексте текстового редактора или файла.
registerCommand — регистрирует команду в глобальном контексте, то есть вне зависимости от наличия открытого редатора с текстом.
Второй метод используется крайне редко, вследствие того, что, в основном, плагины нацелены на работу с содержимом текстового редактора.

В конце все объявленные команды должны быть добавлены в массив subscriptions.
------------------------------------------------ */

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	//let rostools_log_channel = vscode.window.createOutputChannel("rostools_log_channel");
	//rostools_log_channel.appendLine("empty log str");

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rostools" is now active!');

	// https://stackoverflow.com/questions/55135876/extension-api-task-provider-build-task-example

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('rostools.helloworld', () => {
		vscode.window.showInformationMessage('Hello World from rostools!');
	});
	context.subscriptions.push(disposable);

	let srcpush = vscode.commands.registerTextEditorCommand('rostools.push', (textEditor) => {
		let options = vscode.workspace.getConfiguration('rostools');
		vscode.window.showQuickPick(options.configs, {
			placeHolder : "Select host:",
			/*onDidSelectItem: (item: vscode.QuickPickItem) => {
				vscode.window.showInformationMessage(item.label)
			}*/
		}).then(item => {
			if (!item || !item.port) {return;}
			//vscode.commands.executeCommand("Jenkins." + hostname + ".openInJenkins");
			console.log(item.port);
			// Текст открытого файла.
			//const cfg_src = textEditor.document.getText();
			//vscode.window.showInformationMessage(cfg_src);

			vscode.commands.executeCommand("workbench.action.tasks.runTask", "Task Name");
		});

	});
	context.subscriptions.push(srcpush);
}

// this method is called when your extension is deactivated
export function deactivate() {}
