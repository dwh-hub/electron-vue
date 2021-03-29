const electron = require("electron");
const BrowserWindow = electron.remote.BrowserWindow;
console.log(electron);
console.log(electron.remote);

let updateWindow;
const createUpdateWindow = function() {
  if (updateWindow) return;
  updateWindow = new BrowserWindow({
    width: 600,
    height: 300,
    useContentSize: true,
    autoHideMenuBar: true,
    title: "更新弹窗",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  updateWindow.loadURL("app://./index.html");
  updateWindow.on("closed", () => {
    updateWindow = null;
  });
};

export default createUpdateWindow;
