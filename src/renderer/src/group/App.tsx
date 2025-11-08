import React, { useEffect } from "react";
import {
    GroupHeader,
    GroupToggle,
    GroupMembersList,
    AvailablePlayers,
    PlayerRegistrySection,
    ClearGroupButton,
} from "./components";
import ResizeHandle from "@shared/components/ResizeHandle";
import { useGroupState, useAvailablePlayers } from "./hooks";
import { useWindowControls, useSocket } from "@shared/hooks";
import { usePlayerRegistry } from "../main/hooks/usePlayerRegistry";
import { useTranslations } from "@shared/hooks/useTranslations";
import { useWindowResize } from "@shared/hooks/useWindowResize";
import { electron } from "@shared/utils/electron";
import { getItem, setItem } from "@shared/utils/localStorage";

export function GroupApp(): React.JSX.Element {
    const {
        groupState,
        toggleGroupEnabled,
        addMember,
        removeMember,
        clearGroup,
    } = useGroupState();

    const { playerRegistry, addToRegistry, refreshRegistry } =
        usePlayerRegistry();

    const { t } = useTranslations();
    const { emitWithResponse } = useSocket();

    const { availablePlayers } = useAvailablePlayers(playerRegistry);

    const {
        scale,
        zoomIn,
        zoomOut,
        handleDragStart,
        handleClose,
        isDragging,
        isLocked,
    } = useWindowControls({
        baseWidth: 480,
        baseHeight: 530,
        windowType: "group",
    });

    const { handleResizeStart } = useWindowResize("group");

    const handleAddPlayer = async (uuid: string) => {
        await addMember(uuid);
    };

    const handleRemoveMember = async (uuid: string) => {
        await removeMember(uuid);
    };

    const handleClearGroup = async () => {
        await clearGroup();
    };

    const handleSaveToRegistry = async (uid: string, name: string) => {
        const success = await addToRegistry(uid, name);
        if (success) {
            console.log(`Player ${name} (${uid}) saved to registry`);
        }
    };

    useEffect(() => {
        const amount = getItem("transparencyAmount") ?? "70";
        const opacity = parseFloat(amount) / 100;
        document.documentElement.style.setProperty(
            "--transparency-amount",
            opacity.toString(),
        );

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

    const handleDeleteFromRegistry = async (uid: string) => {
        try {
            const result = await emitWithResponse({
                event: "deleteFromPlayerRegistry",
                data: { uid },
            });

            if (result.code === 0) {
                console.log(`Deleted player from registry: ${uid}`);
                await refreshRegistry();
            }
        } catch (error) {
            console.error("Failed to delete player from registry:", error);
        }
    };

    useEffect(() => {
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

    return (
        <div className="group-window">
            <ResizeHandle handleResizeStart={handleResizeStart} />

            <GroupHeader
                onClose={handleClose}
                onDragStart={handleDragStart}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                isLocked={isLocked}
                t={t}
            />

            <div className="group-container">
                <GroupToggle
                    enabled={groupState.enabled}
                    memberCount={groupState.members.length}
                    onToggle={toggleGroupEnabled}
                    t={t}
                />

                <ClearGroupButton
                    onClearGroup={handleClearGroup}
                    disabled={groupState.members.length === 0}
                    t={t}
                />

                <GroupMembersList
                    members={groupState.members}
                    availablePlayers={availablePlayers}
                    playerRegistry={playerRegistry}
                    onRemoveMember={handleRemoveMember}
                    t={t}
                />

                <AvailablePlayers
                    players={availablePlayers}
                    groupMembers={groupState.members}
                    onAddPlayer={handleAddPlayer}
                    t={t}
                />

                <PlayerRegistrySection
                    playerRegistry={playerRegistry}
                    onSavePlayer={handleSaveToRegistry}
                    onDeletePlayer={handleDeleteFromRegistry}
                    t={t}
                />
            </div>
        </div>
    );
}

export default GroupApp;
