const { app, BrowserWindow, protocol, net, shell, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const url = require('url');

// Register custom scheme 'app' for seamless offline Next.js routing
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
      allowServiceWorkers: true
    }
  }
]);

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 880,
    minWidth: 980,
    minHeight: 640,
    title: 'Meraki English',
    icon: path.join(__dirname, '..', 'build', 'icon.ico'),
    backgroundColor: '#EFE9DF',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true
    }
  });

  // Open external links in default OS browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  // Smooth graceful show when content is ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Load the offline Next.js app via custom scheme
  mainWindow.loadURL('app://meraki/index.html');

  // Set clean native application menu
  const template = [
    {
      label: 'App',
      submenu: [
        { label: 'Tentang Meraki', role: 'about' },
        { type: 'separator' },
        { label: 'Keluar', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
      ]
    },
    {
      label: 'Tampilan',
      submenu: [
        { label: 'Muat Ulang', accelerator: 'CmdOrCtrl+R', click: () => mainWindow.reload() },
        { type: 'separator' },
        { label: 'Perbesar', role: 'zoomIn' },
        { label: 'Perkecil', role: 'zoomOut' },
        { label: 'Ukuran Normal', role: 'resetZoom' },
        { type: 'separator' },
        { label: 'Layar Penuh', role: 'togglefullscreen' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  // Protocol handler that maps 'app://meraki/...' to the local 'out/' folder
  protocol.handle('app', (request) => {
    try {
      const parsedUrl = new URL(request.url);
      let pathname = decodeURIComponent(parsedUrl.pathname);

      if (pathname === '/' || pathname === '') {
        pathname = '/index.html';
      }

      const outDir = path.join(__dirname, '..', 'out');
      let targetFile = path.join(outDir, pathname);

      // Check if file exists directly
      if (!fs.existsSync(targetFile) || fs.statSync(targetFile).isDirectory()) {
        if (fs.existsSync(targetFile + '.html')) {
          targetFile = targetFile + '.html';
        } else if (fs.existsSync(path.join(targetFile, 'index.html'))) {
          targetFile = path.join(targetFile, 'index.html');
        } else {
          // Fallback to main index for client-side routing
          targetFile = path.join(outDir, 'index.html');
        }
      }

      return net.fetch(url.pathToFileURL(targetFile).toString());
    } catch (err) {
      console.error('Protocol handler error:', err);
      const fallback = path.join(__dirname, '..', 'out', 'index.html');
      return net.fetch(url.pathToFileURL(fallback).toString());
    }
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
