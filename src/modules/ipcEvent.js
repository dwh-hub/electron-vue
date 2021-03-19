import { ipcMain, app } from "electron";

export default function(mainWindow) {
  ipcMain.on("window-min", () => {
    mainWindow.minimize();
  });

  ipcMain.on("window-max", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("window-close", () => {
    // frame:false后关闭失效
    // mainWindow.close();
    mainWindow = null;
    app.exit();
  });
}
