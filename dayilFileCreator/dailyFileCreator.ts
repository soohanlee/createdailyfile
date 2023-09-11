import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function createDailyFile() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}.${month}.${day}`;
  const folderPath = path.join(
    vscode.workspace.rootPath || "",
    "daily",
    year.toString(),
    month.toString()
  );

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, `${formattedDate}.md`);
  const content = generateDevLogContent();
  fs.writeFileSync(filePath, content);

  vscode.window.showInformationMessage(`File created: ${formattedDate}.md`);
}

export function generateDevLogContent() {
  const templatePath = path.join(
    __dirname,
    "..",
    "dayilFileCreator",
    "devLogTemplate.md"
  );

  try {
    const data = fs.readFileSync(templatePath, "utf8");
    return data;
  } catch (err) {
    console.error(`Error reading from template file: ${err}`);
    return "";
  }
}
