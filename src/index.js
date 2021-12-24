const {app, BrowserWindow} = require('electron');


    
function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 900,
        icon: path.join(__dirname, 'src/icon.png'),
        webPreferences:{
            nodeIntegration: true
            },
    });
    win.loadFile('src/index.html');
    win.setMenu(null);
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})


