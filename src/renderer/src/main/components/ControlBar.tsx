import React, { useEffect } from "react";
import { DragIndicator } from "@/src/shared/components/DragIndicator";
import { CombatTimer } from "./CombatTimer";
import type { ViewMode, SortColumn } from "@shared/types";
import { electron } from "@/src/shared/utils/electron";

export interface ControlBarProps {
    // Window controls
    isLocked: boolean;
    onToggleLock: () => void;
    onClose: () => void;
    onDragStart: (e: React.MouseEvent) => void;

    // View mode controls
    viewMode: ViewMode;
    onToggleViewMode: () => void;
    onToggleSkillsMode: () => void;

    // Sorting controls
    sortColumn: SortColumn;
    onSortChange: (column: SortColumn) => void;
    // Nearby list controls
    showAllPlayers?: boolean;
    onToggleShowAll?: () => void;

    // Action controls
    onSync: () => void;
    isPaused: boolean;
    onTogglePause: () => void;

    // Language control
    currentLanguage: string;
    onLanguageToggle: () => void;

    // Window controls
    onZoomIn: () => void;
    onZoomOut: () => void;
    heightStep?: number;
    onHeightStepChange?: (step: number) => void;

    // Translations
    t: (key: string, fallback?: string | null) => string;
    visibleColumns?: Record<string, boolean>;
    onToggleColumn?: (key: string) => void;
    skillsScope?: "solo" | "nearby";
    onToggleSkillsScope?: () => void;

    // Combat timer
    startTime?: number;
    players?: Array<{ uid: number; total_damage?: { total: number } }>;
    localUid?: number | null;
    manualGroupMembers?: string[];
}

export function ControlBar({
    isLocked,
    onToggleLock,
    onClose,
    onDragStart,
    viewMode,
    onToggleViewMode,
    onToggleSkillsMode,
    sortColumn,
    onSortChange,
    showAllPlayers,
    onToggleShowAll,
    skillsScope,
    onToggleSkillsScope,
    onSync,
    isPaused,
    onTogglePause,
    currentLanguage,
    onLanguageToggle,
    onZoomIn,
    onZoomOut,
    t,
    startTime,
    players,
    localUid,
    manualGroupMembers,
}: ControlBarProps): React.JSX.Element {
    const isNearby = viewMode === "nearby";
    const isSkills = viewMode === "skills";

    let relevantPlayers = players || [];
    if (viewMode === "solo" && localUid !== null && localUid !== undefined) {
        relevantPlayers = relevantPlayers.filter((p) => p.uid === localUid);
    } else if (manualGroupMembers && manualGroupMembers.length > 0) {
        relevantPlayers = relevantPlayers.filter((p) =>
            manualGroupMembers.includes(String(p.uid)),
        );
    }

    const hasDamage =
        relevantPlayers.length > 0 &&
        relevantPlayers.some((p) => p.total_damage && p.total_damage.total > 0);

    useEffect(() => electron.onDataReset(() => onSync()), []);

    return (
        <div className="controls gap-3">
            <div className="flex gap-1">
                {/* Drag Indicator */}
                <DragIndicator onDragStart={onDragStart} isLocked={isLocked} />

                {/* Sync/Reset Button */}
                <button
                    id="sync-button"
                    className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={onSync}
                    disabled={isLocked}
                    title={t("ui.buttons.resetStatistics")}
                >
                    <i className="fa-solid fa-rotate-right sync-icon"></i>
                </button>

                {/* Pause Button */}
                <button
                    id="pause-button"
                    className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={onTogglePause}
                    disabled={isLocked}
                    title={
                        isPaused
                            ? t("ui.buttons.resumeUpdates")
                            : t("ui.buttons.pauseUpdates")
                    }
                >
                    <i
                        className={`fa-solid fa-${isPaused ? "play" : "pause"}`}
                    ></i>
                </button>

                {/* Combat Timer - only show when there's damage */}
                {startTime && hasDamage && (
                    <CombatTimer
                        startTime={startTime}
                        isPaused={isPaused}
                        hasDamage={true}
                    />
                )}

                {/* History Button */}
                <button
                    id="history-btn"
                    className={`control-button advanced-lite-btn ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={() => {
                        electron.openHistoryWindow();
                    }}
                    disabled={isLocked}
                    title={t("ui.buttons.openHistory")}
                >
                    <i className="fa-solid fa-clock-rotate-left"></i>
                </button>

                {/* Group Button */}
                <button
                    id="group-btn"
                    className={`control-button group ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={() => {
                        electron.openGroupWindow();
                    }}
                    disabled={isLocked}
                    title={t("ui.buttons.openGroup")}
                >
                    <i className="fa-solid fa-users"></i>
                </button>

                {/* Monsters Button */}
                <button
                    id="monsters-btn"
                    className={`control-button advanced-lite-btn ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={() => {
                        electron.openMonstersWindow();
                    }}
                    title={t("ui.buttons.openMonsters")}
                >
                    <i className="fa-solid fa-dragon"></i>
                </button>

                {/* Skills View Toggle */}
                <button
                    id="skills-btn"
                    className={`control-button advanced-lite-btn ${viewMode === "skills" ? "active" : ""} ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={onToggleSkillsMode}
                    disabled={isLocked}
                    title={t("ui.buttons.toggleSkillsView")}
                >
                    <i className="fa-solid fa-chart-line"></i>
                </button>
            </div>

            <div className="flex gap-1 mx-auto">
                {/* Nearby/Solo Toggle */}
                <button
                    id="nearby-group-btn"
                    className={`control-button advanced-lite-btn ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    disabled={isLocked}
                    onClick={() => {
                        if (viewMode === "skills") {
                            onToggleSkillsScope && onToggleSkillsScope();
                        } else {
                            onToggleViewMode();
                        }
                    }}
                    title={
                        viewMode === "nearby"
                            ? t("ui.buttons.switchToSoloMode")
                            : t("ui.buttons.switchToNearbyMode")
                    }
                >
                    {viewMode === "skills"
                        ? skillsScope === "nearby"
                            ? t("ui.controls.nearby")
                            : t("ui.controls.solo")
                        : viewMode === "nearby"
                          ? t("ui.controls.nearby")
                          : t("ui.controls.solo")}
                </button>

                {/* If in skills view, hide sort and column controls */}
                {!isSkills && (
                    <>
                        <button
                            id="sort-dmg-btn"
                            className={`sort-button ${sortColumn === "totalDmg" ? "active" : ""} ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                            onClick={() =>
                                !isLocked &&
                                isNearby &&
                                onSortChange("totalDmg")
                            }
                            title={t("ui.buttons.sortDamage")}
                            disabled={isLocked || !isNearby}
                            style={{
                                opacity: isLocked ? 0.3 : isNearby ? 1 : 0.4,
                                cursor: isLocked
                                    ? "not-allowed"
                                    : isNearby
                                      ? "pointer"
                                      : "not-allowed",
                            }}
                        >
                            DMG
                        </button>
                        <button
                            id="sort-tank-btn"
                            className={`sort-button ${sortColumn === "totalDmgTaken" ? "active" : ""} ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                            onClick={() =>
                                !isLocked &&
                                isNearby &&
                                onSortChange("totalDmgTaken")
                            }
                            title={t("ui.buttons.sortDamageTaken")}
                            disabled={isLocked || !isNearby}
                            style={{
                                opacity: isLocked ? 0.3 : isNearby ? 1 : 0.4,
                                cursor: isLocked
                                    ? "not-allowed"
                                    : isNearby
                                      ? "pointer"
                                      : "not-allowed",
                            }}
                        >
                            Tank
                        </button>
                        <button
                            id="sort-heal-btn"
                            className={`sort-button ${sortColumn === "totalHeal" ? "active" : ""} ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                            onClick={() =>
                                !isLocked &&
                                isNearby &&
                                onSortChange("totalHeal")
                            }
                            title={t("ui.buttons.sortHealing")}
                            disabled={isLocked || !isNearby}
                            style={{
                                opacity: isLocked ? 0.3 : isNearby ? 1 : 0.4,
                                cursor: isLocked
                                    ? "not-allowed"
                                    : isNearby
                                      ? "pointer"
                                      : "not-allowed",
                            }}
                        >
                            Heal
                        </button>
                        <button
                            id="toggle-top10-all"
                            className={`control-button advanced-lite-btn ${showAllPlayers ? "active" : ""} ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                            onClick={() =>
                                !isLocked &&
                                isNearby &&
                                onToggleShowAll &&
                                onToggleShowAll()
                            }
                            title={t("ui.buttons.toggleTop10All")}
                            disabled={isLocked || !isNearby}
                            style={{
                                opacity: isLocked ? 0.3 : isNearby ? 1 : 0.4,
                                cursor: isLocked
                                    ? "not-allowed"
                                    : isNearby
                                      ? "pointer"
                                      : "not-allowed",
                            }}
                        >
                            {showAllPlayers
                                ? t("ui.controls.showAll")
                                : t("ui.controls.showTop10")}
                        </button>
                    </>
                )}
            </div>

            <div className="flex gap-1 ml-2">
                {/* Settings */}
                <div className="relative">
                    <button
                        id="settings-btn"
                        className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                        onClick={() => electron.openSettingsWindow()}
                        disabled={isLocked}
                        title={t("ui.buttons.settings")}
                    >
                        <i className="fa-solid fa-cog"></i>
                    </button>
                </div>

                {/* Device Picker Button */}
                <button
                    id="device-btn"
                    className={`control-button advanced-lite-btn ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={() => {
                        electron.openDeviceWindow();
                    }}
                    disabled={isLocked}
                    title={t(
                        "ui.buttons.openDevicePicker",
                        "Select Network Device",
                    )}
                >
                    <i className="fa-solid fa-network-wired"></i>
                </button>

                {/* Zoom Controls */}
                <div className="flex gap-1">
                    <button
                        id="zoom-out-btn"
                        className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                        onClick={onZoomOut}
                        title={t("ui.buttons.zoomOut")}
                        disabled={isLocked}
                        style={{
                            opacity: isLocked ? 0.3 : 1,
                            cursor: isLocked ? "not-allowed" : "pointer",
                        }}
                    >
                        <i className="fa-solid fa-magnifying-glass-minus"></i>
                    </button>
                    <button
                        id="zoom-in-btn"
                        className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                        onClick={onZoomIn}
                        title={t("ui.buttons.zoomIn")}
                        disabled={isLocked}
                        style={{
                            opacity: isLocked ? 0.3 : 1,
                            cursor: isLocked ? "not-allowed" : "pointer",
                        }}
                    >
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                </div>

                {/* Language Toggle */}
                <button
                    id="language-btn"
                    className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={onLanguageToggle}
                    disabled={isLocked}
                    title={
                        currentLanguage === "en"
                            ? "切换到中文"
                            : "Switch to English"
                    }
                >
                    <span style={{ fontSize: "10px", fontWeight: 600 }}>
                        {currentLanguage === "en" ? "EN" : "中"}
                    </span>
                </button>

                {/* Lock Button */}
                <button
                    id="lock-button"
                    className={`control-button`}
                    onClick={onToggleLock}
                    title={
                        isLocked
                            ? t("ui.buttons.unlockWindow")
                            : t("ui.buttons.lockWindow")
                    }
                >
                    <i
                        className={`fa-solid fa-${isLocked ? "lock" : "lock-open"}`}
                    ></i>
                </button>

                {/* Close Button */}
                <button
                    id="close-button"
                    className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                    onClick={onClose}
                    title={t("ui.buttons.close")}
                    disabled={isLocked}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
}

export default ControlBar;
