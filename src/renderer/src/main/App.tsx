import React, { useState, useCallback, useEffect } from "react";
import { ControlBar } from "./components/ControlBar";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { PlayerList } from "./components/PlayerList";
import { SkillsView } from "./components/SkillsView";
import { useDataFetching } from "./hooks/useDataFetching";
import { useWindowControls } from "../shared/hooks/useWindowControls";
import { usePlayerRegistry } from "./hooks/usePlayerRegistry";
import { useManualGroup } from "./hooks/useManualGroup";
import { useWindowResize } from "../shared/hooks/useWindowResize";
import { useTranslations } from "../shared/hooks/useTranslations";
import { resetStatistics } from "../shared/api";
import ResizeHandle from "../shared/components/ResizeHandle";
import type { ViewMode, SortColumn, SortDirection } from "../shared/types";

export function MainApp(): React.JSX.Element {

    const [viewMode, setViewMode] = useState<ViewMode>("nearby");
    const [sortColumn, setSortColumn] = useState<SortColumn>("totalDmg");
    const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
    const [showAllPlayers, setShowAllPlayers] = useState<boolean>(false);
    const [skillsScope, setSkillsScope] = useState<"solo" | "nearby">("nearby");
    const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({
        dps: true,
        hps: true,
        totalDmg: true,
        dmgTaken: true,
        percentDmg: true,
        critPercent: true,
        critDmg: true,
        avgCritDmg: true,
        luckyPercent: true,
        peakDps: true,
        totalHeal: true,
    });

    useEffect(() => {
        try {
            const raw = localStorage.getItem("visibleColumns");
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    setVisibleColumns((prev) => ({ ...prev, ...parsed }));
                }
            }
        } catch (err) {
            console.warn("Failed to load visibleColumns from localStorage", err);
        }
    }, []);

    useEffect(() => {
        try {
            window.electron.onVisibleColumnsChanged((cols: Record<string, boolean>) => {
                if (cols && typeof cols === "object") {
                    setVisibleColumns((prev) => ({ ...prev, ...cols }));
                    try {
                        localStorage.setItem("visibleColumns", JSON.stringify(cols));
                    } catch (e) {
                        console.warn("Failed to persist visibleColumns from IPC", e);
                    }
                }
            });
        } catch (err) {

        }
    }, []);

    useEffect(() => {
        try {
            const disableTransparency = localStorage.getItem("disableTransparency") === "true";
            document.body.style.backgroundColor = disableTransparency ? "#000" : "transparent";

            // Apply transparency amount
            const transparencyAmount = localStorage.getItem("transparencyAmount");
            const amount = transparencyAmount ? parseInt(transparencyAmount, 10) : 70;
            const opacity = amount / 100;
            document.documentElement.style.setProperty('--transparency-amount', opacity.toString());
        } catch (err) {
            console.warn("Failed to apply transparency setting", err);
        }

        try {
            const unsubscribe = window.electron.onTransparencySettingChanged((isDisabled: boolean) => {
                document.body.style.backgroundColor = isDisabled ? "#000" : "transparent";
            });
            return unsubscribe;
        } catch (err) {
            console.warn("Failed to setup transparency listener", err);
        }
    }, []);

    useEffect(() => {
        try {
            const unsubscribe = window.electron.onTransparencyAmountChanged?.((amount: number) => {
                const opacity = amount / 100;
                document.documentElement.style.setProperty('--transparency-amount', opacity.toString());
                localStorage.setItem("transparencyAmount", amount.toString());
            });
            return unsubscribe;
        } catch (err) {
            console.warn("Failed to setup transparency amount listener", err);
        }
    }, []);

    useEffect(() => {
        try {
            const unsubscribe = window.electron.onClickthroughChanged?.((enabled: boolean) => {
                if (window.electron?.setIgnoreMouseEvents) {
                    window.electron.setIgnoreMouseEvents(enabled, { forward: true });
                }
                localStorage.setItem("clickthroughEnabled", enabled.toString());
            });
            return unsubscribe;
        } catch (err) {
            console.warn("Failed to setup clickthrough listener", err);
        }
    }, []);

    useEffect(() => {
        try {
            // Apply clickthrough setting
            const clickthroughEnabled = localStorage.getItem("clickthroughEnabled") === "true";
            if (clickthroughEnabled && window.electron?.setIgnoreMouseEvents) {
                window.electron.setIgnoreMouseEvents(true, { forward: true });
            }
        } catch (err) {
            console.warn("Failed to apply clickthrough setting", err);
        }
    }, []);

    useEffect(() => {
        try {
            const performanceMode = localStorage.getItem("performanceMode") === "true";
            if (performanceMode) {
                document.body.classList.add("performance-mode");
            } else {
                document.body.classList.remove("performance-mode");
            }
        } catch (err) {
            console.warn("Failed to apply performance mode class", err);
        }
    }, []);

    // Hooks
    const {
        currentLanguage,
        t,
        translateSkill,
        translateProfession,
        changeLanguage,
    } = useTranslations();
    const { getPlayerName, addToRegistry } = usePlayerRegistry();
    const { manualGroupState } = useManualGroup();

    const {
        isLocked,
        toggleLock,
        zoomIn,
        zoomOut,
        handleDragStart,
        handleMouseOver,
        handleMouseOut,
    } = useWindowControls({
        baseWidth: 950,
        baseHeight: 480,
        windowType: "main",
    });

    const { handleResizeStart } = useWindowResize('main');

    const {
        players,
        skillsData,
        localUid,
        isLoading,
        isPaused,
        togglePause,
        startTime,
    } = useDataFetching({
        viewMode,
        sortColumn,
        sortDirection,
        manualGroupState,
        onServerReset: () => {
            console.log("Server reset callback triggered");
        },
        showAllPlayers,
    });

    // Keyboard shortcut for lock toggle (Ctrl+L or Cmd+L)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                toggleLock();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleLock]);

    const handleToggleViewMode = useCallback(() => {
        setViewMode((prev) => (prev === "nearby" ? "solo" : "nearby"));
    }, []);

    const handleToggleSkillsMode = useCallback(() => {
        setViewMode((prev) => (prev === "skills" ? "nearby" : "skills"));
    }, []);

    const handleToggleSkillsScope = useCallback(() => {
        setSkillsScope((prev) => (prev === "nearby" ? "solo" : "nearby"));
    }, []);

    const handleSortChange = useCallback(
        (column: SortColumn) => {
            if (sortColumn === column) {
                setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
            } else {
                setSortColumn(column);
                setSortDirection("desc");
            }
        },
        [sortColumn],
    );

    const handleSync = useCallback(async () => {
        await resetStatistics();
    }, []);

    const handleLanguageToggle = useCallback(async () => {
        const newLang = currentLanguage === "en" ? "zh" : "en";
        await changeLanguage(newLang);
    }, [currentLanguage, changeLanguage]);

    const handleAddToRegistry = useCallback(
        async (uid: string, name: string) => {
            const success = await addToRegistry(uid, name);

            if (success) {
                const btn = document.querySelector(
                    `.add-to-registry-btn[data-uid="${uid}"]`,
                ) as HTMLButtonElement;
                if (btn) {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
                    btn.style.background = "rgba(46, 204, 113, 0.3)";
                    btn.style.borderColor = "#2ecc71";
                    btn.style.color = "#2ecc71";

                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.background = "";
                        btn.style.borderColor = "";
                        btn.style.color = "";
                    }, 1000);
                }
            }
        },
        [addToRegistry],
    );

    const handleClose = useCallback(() => {
        window.electron.closeWindow();
    }, []);

    return (
        <div
            className={`dps-meter ${isLocked ? "locked" : ""}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <ResizeHandle handleResizeStart={handleResizeStart} />

            <ControlBar
                isLocked={isLocked}
                onToggleLock={toggleLock}
                onClose={handleClose}
                onDragStart={handleDragStart}
                viewMode={viewMode}
                onToggleViewMode={handleToggleViewMode}
                onToggleSkillsMode={handleToggleSkillsMode}
                skillsScope={skillsScope}
                onToggleSkillsScope={handleToggleSkillsScope}
                sortColumn={sortColumn}
                onSortChange={handleSortChange}
                onSync={handleSync}
                isPaused={isPaused}
                onTogglePause={togglePause}
                showAllPlayers={showAllPlayers}
                onToggleShowAll={() => setShowAllPlayers((s) => !s)}
                currentLanguage={currentLanguage}
                onLanguageToggle={handleLanguageToggle}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                visibleColumns={visibleColumns}
                onToggleColumn={(key: string) => {
                    const newState = { ...visibleColumns, [key]: !visibleColumns[key] };
                    setVisibleColumns(newState);
                    try {
                        localStorage.setItem("visibleColumns", JSON.stringify(newState));
                    } catch (e) {
                        console.warn("Failed to persist visibleColumns to localStorage", e);
                    }
                }}
                t={t}
                startTime={startTime}
                players={players}
                localUid={localUid}
                manualGroupMembers={manualGroupState?.enabled ? manualGroupState.members : undefined}
            />

            {isLoading ? (
                <LoadingIndicator
                    message={t(
                        "ui.messages.waitingForData",
                    )}
                />
            ) : viewMode === "skills" && skillsData ? (
                <SkillsView
                    skillsData={
                        skillsScope === "solo" && localUid
                            ? { [String(localUid)]: skillsData[String(localUid)] }
                            : skillsData
                    }
                    startTime={startTime}
                    getPlayerName={getPlayerName}
                    translateProfession={translateProfession}
                    translateSkill={translateSkill}
                    scope={skillsScope}
                    t={t}
                />
            ) : (
                <PlayerList
                    players={players}
                    localUid={localUid}
                    onAddToRegistry={handleAddToRegistry}
                    getPlayerName={getPlayerName}
                    translateProfession={translateProfession}
                    visibleColumns={visibleColumns}
                    t={t}
                />
            )}
        </div>
    );
}

export default MainApp;
