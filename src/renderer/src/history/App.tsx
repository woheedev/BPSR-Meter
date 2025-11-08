import React, { useEffect } from "react";
import {
    HistoryHeader,
    HistoryControls,
    HistoryList,
    HistoryDetails,
    SkillModal,
} from "./components";
import { useHistoryList, useHistoryDetails, useHistorySettings } from "./hooks";
import { useWindowControls, useSocket } from "@shared/hooks";
import { usePlayerRegistry } from "../main/hooks/usePlayerRegistry";
import { useTranslations } from "@shared/hooks/useTranslations";
import { useWindowResize } from "@shared/hooks/useWindowResize";
import ResizeHandle from "@shared/components/ResizeHandle";
import { electron } from "@shared/utils/electron";
import { getItem, setItem } from "@shared/utils/localStorage";

export function HistoryApp(): React.JSX.Element {
    // Hooks
    const {
        historyItems,
        isLoading: isLoadingList,
        error: listError,
        refreshHistoryList,
    } = useHistoryList();

    const {
        selectedTimestamp,
        summary,
        userData,
        selectedPlayerSkills,
        isLoadingDetails,
        isLoadingSkills,
        detailsError,
        loadDetails,
        loadPlayerSkills,
        closeSkillModal,
    } = useHistoryDetails();

    const {
        isHistorySavingEnabled,
        saveOnLineSwitch,
        toggleHistorySaving,
        toggleSaveOnLineSwitch,
    } = useHistorySettings();

    const { getPlayerName, refreshRegistry } = usePlayerRegistry();

    const { translateSkill, translateProfession, t } = useTranslations();

    const socket = useSocket();

    const {
        zoomIn,
        zoomOut,
        handleDragStart,
        handleClose,
        isDragging,
        isLocked,
    } = useWindowControls({
        baseWidth: 1125,
        baseHeight: 875,
        windowType: "history",
    });

    const { handleResizeStart } = useWindowResize("history");

    useEffect(() => {
        refreshHistoryList();
    }, [refreshHistoryList]);

    // Listen for history updates from server
    useEffect(() => {
        const handleHistoryUpdate = () => {
            refreshHistoryList();
        };

        socket.on("historyUpdated", handleHistoryUpdate);

        return () => {
            socket.off("historyUpdated", handleHistoryUpdate);
        };
    }, [socket, refreshHistoryList]);

    useEffect(() => {
        const amount = getItem("transparencyAmount") ?? "70";
        const opacity = parseFloat(amount) / 100;
        document.documentElement.style.setProperty(
            "--transparency-amount",
            opacity.toString(),
        );

        const disableTransparency = getItem("disableTransparency") === "true";
        document.body.style.backgroundColor = disableTransparency
            ? "#000"
            : "transparent";

        const performanceMode = getItem("performanceMode") === "true";
        if (performanceMode) {
            document.body.classList.add("performance-mode");
        } else {
            document.body.classList.remove("performance-mode");
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

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    useEffect(() => {
        const enabled = getItem("clickthroughEnabled") === "true";
        electron.setIgnoreMouseEvents(enabled, { forward: true });

        const unsubscribe = electron.onClickthroughChanged(
            (enabled: boolean) => {
                electron.setIgnoreMouseEvents(enabled, { forward: true });
                setItem("clickthroughEnabled", enabled.toString());
            },
        );

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(refreshRegistry, 10000);
        return () => clearInterval(interval);
    }, [refreshRegistry]);

    const handleSelectItem = async (timestamp: string) => {
        await loadDetails(timestamp);
    };

    const handleViewSkills = async (timestamp: string, uid: string) => {
        await loadPlayerSkills(timestamp, uid);
    };

    const handleRefresh = async () => {
        await refreshHistoryList();
    };

    const handleDeleteItem = async (timestamp: string) => {
        const result = await electron.deleteHistoryLog(timestamp);

        if (result.success) {
            if (selectedTimestamp === timestamp) {
                loadDetails(null);
            }

            await refreshHistoryList();
        } else {
            alert(`Failed to delete log: ${result.error || "Unknown error"}`);
        }
    };

    return (
        <div className="history-window">
            <ResizeHandle handleResizeStart={handleResizeStart} />

            <HistoryHeader
                onClose={handleClose}
                onDragStart={handleDragStart}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                isLocked={isLocked}
                t={t}
            />

            <div className="history-container">
                <div className="history-list-section">
                    <HistoryControls
                        isHistorySavingEnabled={isHistorySavingEnabled}
                        saveOnLineSwitch={saveOnLineSwitch}
                        onRefresh={handleRefresh}
                        onToggleHistorySaving={toggleHistorySaving}
                        onToggleSaveOnLineSwitch={toggleSaveOnLineSwitch}
                        t={t}
                    />

                    <HistoryList
                        historyItems={historyItems}
                        isLoading={isLoadingList}
                        selectedTimestamp={selectedTimestamp}
                        onSelectItem={handleSelectItem}
                        onDeleteItem={handleDeleteItem}
                    />
                </div>

                <div className="history-details-section">
                    <HistoryDetails
                        summary={summary}
                        userData={userData}
                        isLoading={isLoadingDetails}
                        error={detailsError}
                        getPlayerName={getPlayerName}
                        translateProfession={translateProfession}
                        onViewSkills={handleViewSkills}
                        selectedTimestamp={selectedTimestamp}
                        t={t}
                    />
                </div>
            </div>

            <SkillModal
                playerSkills={selectedPlayerSkills}
                isLoading={isLoadingSkills}
                onClose={closeSkillModal}
                getPlayerName={getPlayerName}
                translateSkill={translateSkill}
                t={t}
            />
        </div>
    );
}

export default HistoryApp;
