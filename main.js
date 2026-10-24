const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    title: "Calendar Widget",
    width: 410,
    height: 320,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    background: "#00000000",
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});