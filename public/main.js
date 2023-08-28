const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();

function createWindow() {
  const window = new BrowserWindow({
    width: 700,
    height: 1200,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  window.loadURL("http://localhost:3000");
  // window.webContents.openDevTools();
}

app.on("ready", createWindow);
