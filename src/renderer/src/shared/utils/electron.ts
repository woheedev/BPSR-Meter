export function safeElectron<T = any>(
    method: string,
    ...args: any[]
): T | undefined {
    try {
        const fn = window.electron?.[method];
        if (typeof fn === "function") {
            return fn(...args);
        }
        console.warn(`Electron API method '${method}' is not available`);
        return undefined;
    } catch (error) {
        console.error(`Error calling electron.${method}:`, error);
        return undefined;
    }
}

export const electron = {
    // Window controls
    closeWindow: () => safeElectron("closeWindow"),
    toggleLockState: () => safeElectron("toggleLockState"),
    setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) =>
        safeElectron("setIgnoreMouseEvents", ignore, options),
    getWindowPosition: async (): Promise<{ x: number; y: number }> =>
        (await safeElectron("getWindowPosition")) || { x: 0, y: 0 },
    setWindowPosition: (windowType: string, x: number, y: number) =>
        safeElectron("setWindowPosition", windowType, x, y),
    saveWindowSize: (
        windowType: string,
        width?: number,
        height?: number,
        scale?: number,
    ) => safeElectron("saveWindowSize", windowType, width, height, scale),
    getSavedWindowSize: async (
        windowType: string,
    ): Promise<{ width: number; height: number; scale: number } | null> =>
        (await safeElectron("getSavedWindowSize", windowType)) || null,

    // Window resize
    resizeWindow: (windowType: string, width: number, height: number) =>
        safeElectron("resizeWindow", windowType, width, height),

    // Window openers
    openHistoryWindow: () => safeElectron("openHistoryWindow"),
    openGroupWindow: () => safeElectron("openGroupWindow"),
    openMonstersWindow: () => safeElectron("openMonstersWindow"),
    openSettingsWindow: () => safeElectron("openSettingsWindow"),
    openDeviceWindow: () => safeElectron("openDeviceWindow"),

    // Settings updates
    updateVisibleColumns: (columns: Record<string, boolean>) =>
        safeElectron("updateVisibleColumns", columns),
    updateGlobalSettings: (settings: Record<string, any>) =>
        safeElectron("updateGlobalSettings", settings),

    // Event listeners
    onVisibleColumnsChanged: (
        callback: (columns: Record<string, boolean>) => void,
    ) => safeElectron("onVisibleColumnsChanged", callback),
    onTransparencySettingChanged: (callback: (isDisabled: boolean) => void) =>
        safeElectron("onTransparencySettingChanged", callback),
    onTransparencyAmountChanged: (callback: (amount: number) => void) =>
        safeElectron("onTransparencyAmountChanged", callback),
    onLockStateChanged: (callback: (locked: boolean) => void) =>
        safeElectron("onLockStateChanged", callback),
    onClickthroughChanged: (callback: (enabled: boolean) => void) =>
        safeElectron("onClickthroughChanged", callback),

    // Updates
    checkForUpdatesWithDialog: async (): Promise<{
        available: boolean;
        currentVersion?: string;
        error?: string;
    }> =>
        (await safeElectron("checkForUpdatesWithDialog")) || {
            available: false,
            error: "API not available",
        },

    // History
    deleteHistoryLog: async (
        timestamp: string,
    ): Promise<{ success: boolean; error?: string }> =>
        (await safeElectron("deleteHistoryLog", timestamp)) || {
            success: false,
            error: "API not available",
        },

    // Damage logs
    saveDamageLog: async (data: any): Promise<{ success: boolean }> =>
        (await safeElectron("saveDamageLog", data)) || { success: false },
    getDamageLogs: async (): Promise<any[]> =>
        (await safeElectron("getDamageLogs")) || [],
    deleteDamageLog: async (filename: string): Promise<{ success: boolean }> =>
        (await safeElectron("deleteDamageLog", filename)) || { success: false },
};

export function isElectron(): boolean {
    return typeof window !== "undefined" && !!window.electron;
}
