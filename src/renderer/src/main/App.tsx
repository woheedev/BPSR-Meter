import React, { useState, useEffect } from "react";
import { ControlBar } from "./components/ControlBar";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { PlayerList } from "./components/PlayerList";
import { SkillsView } from "./components/SkillsView";
import { useDataFetching } from "./hooks/useDataFetching";
import { useWindowControls } from "@shared/hooks/useWindowControls";
import { usePlayerRegistry } from "./hooks/usePlayerRegistry";
import { useManualGroup } from "./hooks/useManualGroup";
import { useWindowResize } from "@shared/hooks/useWindowResize";
import { useTranslations } from "@shared/hooks/useTranslations";
import { resetStatistics } from "@shared/api";
import ResizeHandle from "@shared/components/ResizeHandle";
import { electron } from "@shared/utils/electron";
import { getItem, setItem, getJSON, setJSON } from "@shared/utils/localStorage";
import type { ViewMode, SortColumn, SortDirection } from "@shared/types";

export function MainApp(): React.JSX.Element {
    const [viewMode, setViewMode] = useState<ViewMode>("nearby");
    const [sortColumn, setSortColumn] = useState<SortColumn>("totalDmg");
    const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
    const [showAllPlayers, setShowAllPlayers] = useState<boolean>(false);
    const [skillsScope, setSkillsScope] = useState<"solo" | "nearby">("nearby");
    const [visibleColumns, setVisibleColumns] = useState<
        Record<string, boolean>
    >({
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
        const parsed = getJSON<Record<string, boolean>>("visibleColumns");
        if (parsed && typeof parsed === "object") {
            setVisibleColumns((prev) => ({ ...prev, ...parsed }));
        }
    }, []);

    useEffect(() => {
        electron.onVisibleColumnsChanged((cols: Record<string, boolean>) => {
            if (cols && typeof cols === "object") {
                setVisibleColumns((prev) => ({ ...prev, ...cols }));
                setJSON("visibleColumns", cols);
            }
        });
    }, []);

    useEffect(() => {
        try {
            const disableTransparency =
                getItem("disableTransparency") === "true";
            document.body.style.backgroundColor = disableTransparency
                ? "#000"
                : "transparent";

            // Apply transparency amount
            const transparencyAmount = getItem("transparencyAmount");
            const amount = transparencyAmount
                ? parseInt(transparencyAmount, 10)
                : 70;
            const opacity = amount / 100;
            document.documentElement.style.setProperty(
                "--transparency-amount",
                opacity.toString(),
            );
        } catch (err) {
            console.warn("Failed to apply transparency setting", err);
        }

        const unsubscribe = electron.onTransparencySettingChanged(
            (isDisabled: boolean) => {
                document.body.style.backgroundColor = isDisabled
                    ? "#000"
                    : "transparent";
            },
        );
        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = electron.onTransparencyAmountChanged(
            (amount: number) => {
                const opacity = amount / 100;
                document.documentElement.style.setProperty(
                    "--transparency-amount",
                    opacity.toString(),
                );
                setItem("transparencyAmount", amount.toString());
            },
        );
        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = electron.onClickthroughChanged(
            (enabled: boolean) => {
                electron.setIgnoreMouseEvents(enabled, { forward: true });
                setItem("clickthroughEnabled", enabled.toString());
            },
        );
        return unsubscribe;
    }, []);

    useEffect(() => {
        const clickthroughEnabled = getItem("clickthroughEnabled") === "true";
        if (clickthroughEnabled) {
            electron.setIgnoreMouseEvents(true, { forward: true });
        }
    }, []);

    useEffect(() => {
        try {
            const performanceMode = getItem("performanceMode") === "true";
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

    const { handleResizeStart } = useWindowResize("main");

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
            if ((e.ctrlKey || e.metaKey) && e.key === "l") {
                e.preventDefault();
                toggleLock();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleLock]);

    const handleToggleViewMode = () => {
        setViewMode((prev) => (prev === "nearby" ? "solo" : "nearby"));
    };

    const handleToggleSkillsMode = () => {
        setViewMode((prev) => (prev === "skills" ? "nearby" : "skills"));
    };

    const handleToggleSkillsScope = () => {
        setSkillsScope((prev) => (prev === "nearby" ? "solo" : "nearby"));
    };

    const handleSortChange = (column: SortColumn) => {
        if (sortColumn === column) {
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortColumn(column);
            setSortDirection("desc");
        }
    };

    const handleSync = async () => {
        await resetStatistics();
    };

    const handleLanguageToggle = async () => {
        const newLang = currentLanguage === "en" ? "zh" : "en";
        await changeLanguage(newLang);
    };

    const handleAddToRegistry = async (uid: string, name: string) => {
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
    };

    const handleClose = () => {
        electron.closeWindow();
    };

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
                    const newState = {
                        ...visibleColumns,
                        [key]: !visibleColumns[key],
                    };
                    setVisibleColumns(newState);
                    setJSON("visibleColumns", newState);
                }}
                t={t}
                startTime={startTime}
                players={players}
                localUid={localUid}
                manualGroupMembers={
                    manualGroupState?.enabled
                        ? manualGroupState.members
                        : undefined
                }
            />

            {isLoading ? (
                <LoadingIndicator message={t("ui.messages.waitingForData")} />
            ) : viewMode === "skills" && skillsData ? (
                <SkillsView
                    skillsData={
                        skillsScope === "solo" && localUid
                            ? {
                                  [String(localUid)]:
                                      skillsData[String(localUid)],
                              }
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
