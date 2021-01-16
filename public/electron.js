const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { globalShortcut } = require('electron');
const { Menu } = require('electron');

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
      devTools: false,
      preload: __dirname + '/preload.js',
      contextIsolation: true,
      nodeIntegrationInWorker: true,
      nodeIntegration: false
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

var menu = Menu.buildFromTemplate([
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Recargar',
        role: 'reload',
        accelerator: 'CommandOrControl+r'
      },
      {
        label: 'Minimizar',
        role: 'minimize'
        // accelerator: 'CommandOrControl+r'
      },
      {
        label: 'Exit',
        click() {
          app.quit();
        },
        accelerator: 'CommandOrControl+q'
      }
    ]
  }
]);
Menu.setApplicationMenu(menu);

app.on('ready', createWindow);

app.whenReady().then(() => {
  // Register a 'CommandOrControl+Y' shortcut listener.
  globalShortcut.register('CommandOrControl+q', () => {
    app.quit();
  });
  globalShortcut.register('CommandOrControl+r', () => {
    mainWindow.reload();
  });
});

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
