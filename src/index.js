const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

let width = 1000;
let height = 900;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    enableRemoteModule: true,
    width: width,
    height: height,
    icon: __dirname + '\\icon.png'
  });


  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenu(null)

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

