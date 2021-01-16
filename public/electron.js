const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    minWidth: 900,
    minHeight: 800,
    icon: path.join(__dirname, '../icon.ico'),
    title: 'Platify v1.0.0',
    center: true,
    backgroundColor: '#181719',
    webPreferences: {
      // preload: __dirname + '/preload.js',
      contextIsolation: true,
      // webSecurity: false,
      nodeIntegrationInWorker: true,
      nodeIntegration: true
      // enableRemoteModule: true
      // allowRunningInsecureContent: (serve) ? true : false,
    }
  });
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );
  isDev ? console.log('DEV mode...') : console.log('PROD mode...');
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

// app.whenReady().then(() => {
// Register a 'CommandOrControl+Y' shortcut listener.
// globalShortcut.register('CommandOrControl+Y', () => {
//   // Do stuff when Y and either Command/Control is pressed.
// })
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
