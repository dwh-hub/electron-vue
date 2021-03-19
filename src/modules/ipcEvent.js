export default function() {
  ipcMain.on("window-min", () => {
    mainWindow.minimize();
  });

  ipcMain.on("window-max", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("window-close", () => {
    let wins = BrowserWindow.getAllWindows();
    for (let i = 0; i < wins.length; i++) {
      wins[i].close();
    }
  });
  
  ipcMain.on("toggle-mini", (event, params) => {
    if (params.value) {
      global.miniWindow.show();
      mainWindow.hide();
    } else {
      global.miniWindow.hide();
      mainWindow.show();
    }
  });
}
