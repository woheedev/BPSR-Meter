import { app, BrowserWindow, ipcMain, IpcMainEvent, IpcMainInvokeEvent, screen, globalShortcut } from "electron";
import { checkForUpdates, checkForUpdatesSilent, showUpdateDialog } from "./updateChecker";
import path from "path";
import { exec, fork, ChildProcess } from "child_process";
import { electronApp, is } from "@electron-toolkit/utils";
import net from "net";
import fs from "fs";

/** 
 * Constants and Globals
 */

const WINDOW_CONFIGS = {
    main: { defaultSize: { width: 950, height: 480 }, resizable: true },
    group: { defaultSize: { width: 480, height: 680 }, resizable: true },
    history: { defaultSize: { width: 950, height: 600 }, resizable: true },
    device: { defaultSize: { width: 600, height: 400 }, resizable: true },
    settings: { defaultSize: { width: 420, height: 520 }, resizable: true },
    monsters: { defaultSize: { width: 950, height: 600 }, resizable: true }
} as const;

type WindowType = keyof typeof WINDOW_CONFIGS;
type WindowSize = { width: number; height: number; scale?: number };

const windows: Record<WindowType, BrowserWindow | null> = {
    main: null, group: null, history: null, device: null, settings: null, monsters: null
};

const lastWindowSizes: Record<WindowType, WindowSize> = {
    main: { width: 950, height: 480, scale: 1 },
    group: { width: 480, height: 680, scale: 1 },
    history: { width: 950, height: 600, scale: 1 },
    device: { width: 600, height: 400, scale: 1 },
    settings: { width: 420, height: 520, scale: 1 },
    monsters: { width: 950, height: 600, scale: 1 }
};

let serverProcess: ChildProcess | null = null;
let serverPort: number = 8989;
let isLocked: boolean = false;
const userDataPath = is.dev ? process.cwd() : app.getPath("userData");
const settingsPath = path.join(userDataPath, "settings.json");

/**
 * Utilities
 */

const MAX_LOG_SIZE = 5 * 1024 * 1024;
const MAX_LOG_FILES = 3;

function rotateLogFile(logPath: string): void {
    try {
        for (let i = MAX_LOG_FILES - 1; i > 0; i--) {
            const oldFile = `${logPath}.${i}`;
            const newFile = `${logPath}.${i + 1}`;
            if (fs.existsSync(oldFile)) {
                if (i === MAX_LOG_FILES - 1) {
                    fs.unlinkSync(oldFile);
                } else {
                    fs.renameSync(oldFile, newFile);
                }
            }
        }

        if (fs.existsSync(logPath)) {
            fs.renameSync(logPath, `${logPath}.1`);
        }
    } catch (e) {
        console.error("Log rotation failed:", e);
    }
}

function logToFile(msg: string): void {
    const logPath = path.join(userDataPath, "information_log.txt");

    try {
        fs.mkdirSync(userDataPath, { recursive: true });

        if (fs.existsSync(logPath)) {
            const stats = fs.statSync(logPath);
            if (stats.size > MAX_LOG_SIZE) {
                rotateLogFile(logPath);
            }
        }

        // eslint-disable-next-line no-control-regex
        const cleanMsg = msg.replace(/\x1b\[[0-9;]*m/g, '');

        fs.appendFileSync(logPath, `${cleanMsg}\n`, { encoding: "utf8" });
    } catch (e) {
        console.error("Log failed:", e);
    }
    console.log(msg);
}

async function loadWindowSizes(): Promise<Record<WindowType, WindowSize>> {
    try {
        const data = await fs.promises.readFile(settingsPath, "utf8");
        const settings = JSON.parse(data);

        if (settings.windowSizes) {
            Object.entries(settings.windowSizes).forEach(([type, size]) => {
                if (type in lastWindowSizes) {
                    lastWindowSizes[type as WindowType] = size as WindowSize;
                }
            });
            return settings.windowSizes;
        }
    } catch {
    }
    return lastWindowSizes;
}

async function saveWindowSize(windowType: WindowType, width: number, height: number, scale?: number): Promise<void> {
    try {
        lastWindowSizes[windowType] = {
            ...lastWindowSizes[windowType],
            ...(width !== undefined && { width }),
            ...(height !== undefined && { height }),
            ...(scale !== undefined && { scale })
        };

        let settings: any = {};
        try {
            const data = await fs.promises.readFile(settingsPath, "utf8");
            settings = JSON.parse(data);
        } catch { }

        settings.windowSizes = { ...settings.windowSizes, [windowType]: lastWindowSizes[windowType] };
        await fs.promises.writeFile(settingsPath, JSON.stringify(settings, null, 4));
    } catch (error) {
        logToFile(`Error saving window size: ${error}`);
    }
}

function checkPort(port: number): Promise<boolean> {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once("error", () => resolve(false));
        server.once("listening", () => {
            server.close(() => resolve(true));
        });
        server.listen(port);
    });
}

async function findAvailablePort(startPort: number = 8989, maxPort: number = 9000): Promise<number> {
    for (let port = startPort; port <= maxPort; port++) {
        if (await checkPort(port)) {
            logToFile(`Port ${port} is available`);
            return port;
        }
        logToFile(`Port ${port} is in use, trying next...`);
    }
    throw new Error("No available ports found");
}

async function killProcessUsingPort(port: number): Promise<void> {
    return new Promise((resolve) => {
        exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
            if (!stdout) return resolve();

            const lines = stdout.split("\n").filter(line => line.includes("LISTENING"));
            const pid = lines[0]?.trim().split(/\s+/).pop();

            if (pid) {
                exec(`taskkill /PID ${pid} /F`, (killError) => {
                    if (!killError) logToFile(`Process ${pid} killed successfully`);
                    resolve();
                });
            } else {
                resolve();
            }
        });
    });
}

/**
 * Window Management
 */

function createWindowConfig(windowType: WindowType, savedSizes: Record<WindowType, WindowSize>) {
    const config = WINDOW_CONFIGS[windowType];
    const size = savedSizes[windowType] || lastWindowSizes[windowType] || config.defaultSize;

    let shouldUseTransparency = true;
    try {
        if (fs.existsSync(settingsPath)) {
            const data = fs.readFileSync(settingsPath, "utf8");
            const settings = JSON.parse(data);
            shouldUseTransparency = !settings.disableTransparency;
        }
    } catch (error) {
        logToFile(`Error reading transparency setting: ${error}`);
    }

    return {
        width: size.width,
        height: size.height,
        transparent: shouldUseTransparency,
        frame: false,
        alwaysOnTop: true,
        resizable: config.resizable,
        skipTaskbar: windowType !== "main",
        show: windowType === "main",
        useContentSize: true,
        webPreferences: {
            preload: path.join(__dirname, "../../out/preload/index.cjs"),
            nodeIntegration: true,
            contextIsolation: true,
        },
        icon: path.join(__dirname, "../../icon.ico"),
        title: windowType.charAt(0).toUpperCase() + windowType.slice(1)
    };
}

function setupWindowEvents(window: BrowserWindow, windowType: WindowType) {
    window.setAlwaysOnTop(true, "screen-saver");
    window.setIgnoreMouseEvents(false);

    window.once("ready-to-show", () => {
        if (windowType !== "main") window.show();
        logToFile(`${windowType} window ready and shown`);
    });

    window.on("show", () => {
        window.webContents.send("window-shown");
    });

    window.on("focus", () => {
        window.webContents.send("window-focused");
    });

    window.on("blur", () => {
        window.webContents.send("window-blurred");
    });

    window.on("closed", () => {
        windows[windowType] = null;
    });
}

function loadWindowURL(window: BrowserWindow, page: string) {
    const url = is.dev && process.env.ELECTRON_RENDERER_URL
        ? `${process.env.ELECTRON_RENDERER_URL}/${page}.html`
        : `http://localhost:${serverPort}/${page}.html`;

    window.loadURL(url);
    logToFile(`Loaded ${page} window from: ${url}`);
}

async function createOrFocusWindow(windowType: WindowType) {
    if (windows[windowType]) {
        windows[windowType].focus();
        return;
    }

    const savedSizes = await loadWindowSizes();
    const windowConfig = createWindowConfig(windowType, savedSizes);

    windows[windowType] = new BrowserWindow(windowConfig);
    setupWindowEvents(windows[windowType]!, windowType);
    loadWindowURL(windows[windowType]!, windowType);
}

/**
 * IPC Handlers
 */

function setupIpcHandlers() {
    ipcMain.on("close-window", (event: IpcMainEvent) => {
        BrowserWindow.fromWebContents(event.sender)?.close();
    });

    ipcMain.on("set-ignore-mouse-events", (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
        BrowserWindow.fromWebContents(event.sender)?.setIgnoreMouseEvents(ignore, options);
    });

    ipcMain.handle("get-window-position", (event: IpcMainInvokeEvent) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        const [x, y] = window.getPosition();
        const bounds = window.getBounds();
        return { x, y, width: bounds.width, height: bounds.height };
    });

    ipcMain.on("toggle-lock-state", () => {
        isLocked = !isLocked;

        // Apply lock state to all windows
        Object.values(windows).forEach((window) => {
            if (window) {
                window.setMovable(!isLocked);
                window.webContents.send("lock-state-changed", isLocked);
            }
        });
    });

    ipcMain.on("save-window-size", (_event: IpcMainEvent, windowType: WindowType, width: number, height: number, scale?: number) => {
        saveWindowSize(windowType, width, height, scale);
    });

    ipcMain.handle("get-saved-window-sizes", loadWindowSizes);

    ipcMain.on("open-group-window", () => createOrFocusWindow("group").catch(err => logToFile(`Error opening group window: ${err}`)));
    ipcMain.on("open-history-window", () => createOrFocusWindow("history").catch(err => logToFile(`Error opening history window: ${err}`)));
    ipcMain.on("open-device-window", () => createOrFocusWindow("device").catch(err => logToFile(`Error opening device window: ${err}`)));
    ipcMain.on("open-settings-window", () => createOrFocusWindow("settings").catch(err => logToFile(`Error opening settings window: ${err}`)));
    ipcMain.on("open-monsters-window", () => createOrFocusWindow("monsters").catch(err => logToFile(`Error opening monsters window: ${err}`)));

    ipcMain.on("update-visible-columns", (_event: IpcMainEvent, cols: Record<string, boolean>) => {
        if (windows.main && !windows.main.isDestroyed()) {
            windows.main.webContents.send("visible-columns-updated", cols);
        }
    });

    ipcMain.on("update-global-settings", async (_event: IpcMainEvent, settings: Partial<Record<string, any>>) => {
        try {
            let currentSettings: any = {};
            try {
                const data = await fs.promises.readFile(settingsPath, "utf8");
                currentSettings = JSON.parse(data);
            } catch { }

            Object.assign(currentSettings, settings);
            await fs.promises.writeFile(settingsPath, JSON.stringify(currentSettings, null, 4));

            if (settings.hasOwnProperty("disableTransparency")) {
                Object.values(windows).forEach((window) => {
                    if (window && !window.isDestroyed()) {
                        window.webContents.send("transparency-setting-changed", settings.disableTransparency);
                    }
                });
            }

            if (settings.hasOwnProperty("transparencyAmount")) {
                Object.values(windows).forEach((window) => {
                    if (window && !window.isDestroyed()) {
                        window.webContents.send("transparency-amount-changed", settings.transparencyAmount);
                    }
                });
            }

            if (settings.hasOwnProperty("clickthroughEnabled")) {
                Object.values(windows).forEach((window) => {
                    if (window && !window.isDestroyed()) {
                        window.webContents.send("clickthrough-changed", settings.clickthroughEnabled);
                    }
                });
            }

            if (settings.hasOwnProperty("lockKeybind")) {
                globalShortcut.unregisterAll();

                const currentKeybinds = {
                    lockKeybind: settings.lockKeybind || "CommandOrControl+L",
                    monstersKeybind: currentSettings.monstersKeybind || "CommandOrControl+M",
                    groupKeybind: currentSettings.groupKeybind || "CommandOrControl+G",
                    settingsKeybind: currentSettings.settingsKeybind || "CommandOrControl+S",
                    deviceKeybind: currentSettings.deviceKeybind || "CommandOrControl+D",
                    historyKeybind: currentSettings.historyKeybind || "CommandOrControl+H"
                };

                // Register lock keybind
                const ret = globalShortcut.register(currentKeybinds.lockKeybind, () => {
                    isLocked = !isLocked;

                    Object.values(windows).forEach((window) => {
                        if (window) {
                            window.setMovable(!isLocked);
                            window.webContents.send("lock-state-changed", isLocked);
                        }
                    });
                });

                // Helper function to toggle window
                const toggleWindow = (windowType: WindowType) => {
                    const window = windows[windowType];
                    if (window && !window.isDestroyed()) {
                        if (window.isVisible()) {
                            window.close();
                        } else {
                            window.show();
                            window.focus();
                        }
                    } else {
                        createOrFocusWindow(windowType).catch(err =>
                            logToFile(`Error opening ${windowType} window: ${err}`)
                        );
                    }
                };

                globalShortcut.register(currentKeybinds.monstersKeybind, () => toggleWindow("monsters"));
                globalShortcut.register(currentKeybinds.groupKeybind, () => toggleWindow("group"));
                globalShortcut.register(currentKeybinds.settingsKeybind, () => toggleWindow("settings"));
                globalShortcut.register(currentKeybinds.deviceKeybind, () => toggleWindow("device"));
                globalShortcut.register(currentKeybinds.historyKeybind, () => toggleWindow("history"));
            }

            if (settings.hasOwnProperty("monstersKeybind") || settings.hasOwnProperty("groupKeybind") ||
                settings.hasOwnProperty("settingsKeybind") || settings.hasOwnProperty("deviceKeybind") ||
                settings.hasOwnProperty("historyKeybind")) {

                globalShortcut.unregisterAll();

                const currentKeybinds = {
                    lockKeybind: currentSettings.lockKeybind || "CommandOrControl+L",
                    monstersKeybind: currentSettings.monstersKeybind || "CommandOrControl+M",
                    groupKeybind: currentSettings.groupKeybind || "CommandOrControl+G",
                    settingsKeybind: currentSettings.settingsKeybind || "CommandOrControl+S",
                    deviceKeybind: currentSettings.deviceKeybind || "CommandOrControl+D",
                    historyKeybind: currentSettings.historyKeybind || "CommandOrControl+H"
                };

                // Register lock keybind
                globalShortcut.register(currentKeybinds.lockKeybind, () => {
                    isLocked = !isLocked;

                    Object.values(windows).forEach((window) => {
                        if (window) {
                            window.setMovable(!isLocked);
                            window.webContents.send("lock-state-changed", isLocked);
                        }
                    });
                });

                const toggleWindow = (windowType: WindowType) => {
                    const window = windows[windowType];
                    if (window && !window.isDestroyed()) {
                        if (window.isVisible()) {
                            window.close();
                        } else {
                            window.show();
                            window.focus();
                        }
                    } else {
                        createOrFocusWindow(windowType).catch(err =>
                            logToFile(`Error opening ${windowType} window: ${err}`)
                        );
                    }
                };

                // Register window toggle keybinds
                globalShortcut.register(currentKeybinds.monstersKeybind, () => toggleWindow("monsters"));
                globalShortcut.register(currentKeybinds.groupKeybind, () => toggleWindow("group"));
                globalShortcut.register(currentKeybinds.settingsKeybind, () => toggleWindow("settings"));
                globalShortcut.register(currentKeybinds.deviceKeybind, () => toggleWindow("device"));
                globalShortcut.register(currentKeybinds.historyKeybind, () => toggleWindow("history"));
            }
        } catch (error) {
            logToFile(`Error updating global settings: ${error}`);
        }
    });

    ipcMain.handle("delete-history-log", async (_event: IpcMainInvokeEvent, logId: string) => {
        try {
            const logsDir = path.join(userDataPath, "logs");
            const logPath = path.join(logsDir, logId);

            if (!logPath.startsWith(logsDir)) {
                return { success: false, error: "Invalid log path" };
            }

            try {
                await fs.promises.access(logPath);
            } catch {
                return { success: false, error: "Log not found" };
            }

            await fs.promises.rm(logPath, { recursive: true, force: true });
            logToFile(`Deleted history log: ${logId}`);

            return { success: true };
        } catch (error) {
            logToFile(`Error deleting history log ${logId}: ${error}`);
            return { success: false, error: String(error) };
        }
    });

    ipcMain.on("set-window-position", (event: IpcMainEvent, windowType: WindowType, x: number, y: number) => {
        const senderWindow = BrowserWindow.fromWebContents(event.sender);
        if (!senderWindow) return;

        const bounds = senderWindow.getBounds();
        const windowWidth = windowType ? lastWindowSizes[windowType].width : bounds.width;
        const windowHeight = windowType ? lastWindowSizes[windowType].height : bounds.height;

        const displays = screen.getAllDisplays();

        if (displays.length > 0) {
            const minX = Math.min(...displays.map(d => d.workArea.x));
            const maxX = Math.max(...displays.map(d => d.workArea.x + d.workArea.width)) - windowWidth;
            const minY = Math.min(...displays.map(d => d.workArea.y));
            const maxY = Math.max(...displays.map(d => d.workArea.y + d.workArea.height)) - windowHeight;

            const clampedX = Math.max(minX, Math.min(x, maxX));
            const clampedY = Math.max(minY, Math.min(y, maxY));

            senderWindow.setBounds({
                x: clampedX,
                y: clampedY,
                width: windowWidth,
                height: windowHeight
            }, false);
        } else {
            senderWindow.setPosition(x, y);
        }
    });

    ipcMain.on("resize-window", (event: IpcMainEvent, windowType: WindowType, width: number, height: number) => {
        const senderWindow = BrowserWindow.fromWebContents(event.sender);
        if (!senderWindow) return;

        const bounds = senderWindow.getBounds();

        senderWindow.setBounds({
            x: bounds.x,
            y: bounds.y,
            width: Math.max(width, 400),
            height: Math.max(height, 300)
        }, false);
    });

    // Update checker handlers
    ipcMain.handle("check-for-updates", async () => {
        const currentVersion = app.getVersion();
        return await checkForUpdates(currentVersion);
    });

    ipcMain.handle("check-for-updates-with-dialog", async () => {
        const currentVersion = app.getVersion();
        const updateInfo = await checkForUpdates(currentVersion);

        if (updateInfo.available) {
            await showUpdateDialog(updateInfo);
        }

        return updateInfo;
    });
}

/**
 *  Server Management
 */

function startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
        const serverPath = path.join(__dirname, "../../out/main/server.js");
        logToFile(`Launching server on port ${serverPort} from: ${serverPath}`);

        const env = {
            ...process.env,
            resourcesPath: process.resourcesPath,
            USER_DATA_PATH: userDataPath
        };

        serverProcess = fork(serverPath, [serverPort.toString()], {
            stdio: ["pipe", "pipe", "pipe", "ipc"],
            env: env
        });

        const timeout = setTimeout(() => {
            reject(new Error("Server did not respond in time (10s timeout)"));
        }, 10000);

        serverProcess.stdout?.setEncoding('utf8');
        serverProcess.stderr?.setEncoding('utf8');

        serverProcess.stdout?.on("data", (data: any) => {
            const output = typeof data === 'string' ? data.trim() : data.toString().trim();
            logToFile(`${output}`);

            const match = output.match(/Web server started at (http:\/\/localhost:\d+)/);
            if (match && windows.main) {
                clearTimeout(timeout);
                loadWindowURL(windows.main, "index");
                resolve();
            }
        });

        serverProcess.stderr?.on("data", (data: any) => {
            const output = typeof data === 'string' ? data.trim() : data.toString().trim();
            logToFile(`SERVER ERROR: ${output}`);
        });

        serverProcess.on("error", reject);
    });
}

/**
 * Main Application
 */

async function createMainWindow(): Promise<void> {
    logToFile("=== STARTING APPLICATION ===");

    await killProcessUsingPort(8989);
    serverPort = await findAvailablePort();

    await loadWindowSizes();

    windows.main = new BrowserWindow(createWindowConfig("main", lastWindowSizes));
    setupWindowEvents(windows.main, "main");

    windows.main.webContents.on("did-finish-load", () => {
        windows.main.webContents.send("lock-state-changed", isLocked);
    });

    windows.main.on("closed", () => {
        Object.values(windows).forEach(win => win?.close());
        if (serverProcess) {
            serverProcess.kill("SIGTERM");
            setTimeout(() => serverProcess?.kill("SIGKILL"), 5000);
        }
    });

    setupIpcHandlers();

    try {
        await startServer();
    } catch (error) {
        logToFile(`Server startup failed: ${error}`);
        if (windows.main) {
            windows.main.loadURL(`data:text/html,<h2 style="color:red">Error: ${error}</h2>`);
        }
    }
}

/**
 * App Lifecycle
 */

app.whenReady().then(() => {
    electronApp.setAppUserModelId("com.electron");

    // Load saved keybinds or use defaults
    let savedLockKeybind = "CommandOrControl+L";
    let savedMonstersKeybind = "CommandOrControl+M";
    let savedGroupKeybind = "CommandOrControl+G";
    let savedSettingsKeybind = "CommandOrControl+S";
    let savedDeviceKeybind = "CommandOrControl+D";
    let savedHistoryKeybind = "CommandOrControl+H";

    try {
        if (fs.existsSync(settingsPath)) {
            const data = fs.readFileSync(settingsPath, "utf8");
            const settings = JSON.parse(data);
            if (settings.lockKeybind) savedLockKeybind = settings.lockKeybind;
            if (settings.monstersKeybind) savedMonstersKeybind = settings.monstersKeybind;
            if (settings.groupKeybind) savedGroupKeybind = settings.groupKeybind;
            if (settings.settingsKeybind) savedSettingsKeybind = settings.settingsKeybind;
            if (settings.deviceKeybind) savedDeviceKeybind = settings.deviceKeybind;
            if (settings.historyKeybind) savedHistoryKeybind = settings.historyKeybind;
        }
    } catch (error) {
        logToFile(`Error reading saved keybinds: ${error}`);
    }

    // Helper function to toggle window
    const toggleWindow = (windowType: WindowType) => {
        const window = windows[windowType];
        if (window && !window.isDestroyed()) {
            if (window.isVisible()) {
                window.close();
            } else {
                window.show();
                window.focus();
            }
        } else {
            createOrFocusWindow(windowType).catch(err =>
                logToFile(`Error opening ${windowType} window: ${err}`)
            );
        }
    };

    const lockRet = globalShortcut.register(savedLockKeybind, () => {
        isLocked = !isLocked;

        Object.values(windows).forEach((window) => {
            if (window) {
                window.setMovable(!isLocked);
                window.webContents.send("lock-state-changed", isLocked);
            }
        });
    });

    if (!lockRet) {
        logToFile('Global shortcut registration failed for lock keybind');
    }

    const monstersRet = globalShortcut.register(savedMonstersKeybind, () => toggleWindow("monsters"));
    if (!monstersRet) {
        logToFile(`Failed to register monsters keybind: ${savedMonstersKeybind}`);
    }

    const groupRet = globalShortcut.register(savedGroupKeybind, () => toggleWindow("group"));
    if (!groupRet) {
        logToFile(`Failed to register group keybind: ${savedGroupKeybind}`);
    }

    const settingsRet = globalShortcut.register(savedSettingsKeybind, () => toggleWindow("settings"));
    if (!settingsRet) {
        logToFile(`Failed to register settings keybind: ${savedSettingsKeybind}`);
    }

    const deviceRet = globalShortcut.register(savedDeviceKeybind, () => toggleWindow("device"));
    if (!deviceRet) {
        logToFile(`Failed to register device keybind: ${savedDeviceKeybind}`);
    }

    const historyRet = globalShortcut.register(savedHistoryKeybind, () => toggleWindow("history"));
    if (!historyRet) {
        logToFile(`Failed to register history keybind: ${savedHistoryKeybind}`);
    }

    createMainWindow();

    setTimeout(() => {
        const currentVersion = app.getVersion();
        checkForUpdatesSilent(currentVersion).catch(err => {
            logToFile(`Update check failed: ${err}`);
        });
    }, 5000);

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", () => {
    globalShortcut.unregisterAll();
    logToFile("App closing, cleaning up...");
});