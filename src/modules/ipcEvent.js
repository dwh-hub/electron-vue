import { ipcMain, app } from "electron";

export default function(mainWindow) {
  ipcMain.on("window-min", () => {
    mainWindow.minimize();
  });

  ipcMain.on("window-max", (event, isMax) => {
    if (isMax) {
      // resizable为false后需手动设置最大化还原
      mainWindow.setContentSize(1200, 800);
      mainWindow.center();
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
