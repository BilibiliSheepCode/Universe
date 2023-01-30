const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
// require('update-electron-app')()
const mode = process.argv[2];

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  ipcMain.handle('ping', () => 'pong')
  // if(mode !== 'dev'){
  //   win.loadFile('./react/uvsui/build/index.html')
  // } else {
  //   win.loadURL('http://localhost:3000/')
  // }
  win.loadFile('./index.html')
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});