import * as vscode from "vscode";
import { createDailyFile } from "../dayilFileCreator/dailyFileCreator";

export function activate(context: vscode.ExtensionContext) {
  let helloWorldDisposable = vscode.commands.registerCommand(
    "createdailyfile.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from createDailyFile!");
    }
  );

  let createDailyFileDisposable = vscode.commands.registerCommand(
    "createdailyfile.createDailyFile",
    createDailyFile
  );

  context.subscriptions.push(helloWorldDisposable, createDailyFileDisposable);

  scheduleFileCreation();

  console.log(
    'Congratulations, your extension "createdailyfile" is now active!'
  );

  function scheduleFileCreation() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0
    );
    const timeToMidnight = midnight.getTime() - now.getTime();

    setTimeout(createDailyFile, timeToMidnight);
  }
}

export function deactivate() {}
