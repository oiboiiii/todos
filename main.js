const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

      app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});