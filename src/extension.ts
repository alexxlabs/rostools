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

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rosconfig" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('rosconfig.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from rosconfig!');
	});
	context.subscriptions.push(disposable);

	let convert = vscode.commands.registerTextEditorCommand('rosconfig.convert', (textEditor) => {
		// Обычный объект, где имена свойств совпадают с теми, что были обозначены в манифесте.
		const options = vscode.workspace.getConfiguration('rosconfig');

		// Текст открытого файла.
		const text = textEditor.document.getText();
	});
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}
