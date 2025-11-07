import React, { useCallback, useEffect } from "react";
import {
    GroupHeader,
    GroupToggle,
    GroupMembersList,
    AvailablePlayers,
    PlayerRegistrySection,
    ClearGroupButton,
} from "./components";
import ResizeHandle from "../shared/components/ResizeHandle";
import { useGroupState, useAvailablePlayers } from "./hooks";
import { useWindowControls, useSocket } from "../shared/hooks";
import { usePlayerRegistry } from "../main/hooks/usePlayerRegistry";
import { useTranslations } from "../shared/hooks/useTranslations";
import { useWindowResize } from "../shared/hooks/useWindowResize";

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

    const { scale, zoomIn, zoomOut, handleDragStart, handleClose, isDragging } =
        useWindowControls({
            baseWidth: 480,
            baseHeight: 530,
            windowType: "group",
        });

    const { handleResizeStart } = useWindowResize("group");

    const handleAddPlayer = useCallback(
        async (uuid: string) => {
            await addMember(uuid);
        },
        [addMember],
    );

    const handleRemoveMember = useCallback(
        async (uuid: string) => {
            await removeMember(uuid);
        },
        [removeMember],
    );

    const handleClearGroup = useCallback(async () => {
        await clearGroup();
    }, [clearGroup]);

    const handleSaveToRegistry = useCallback(
        async (uid: string, name: string) => {
            const success = await addToRegistry(uid, name);
            if (success) {
                console.log(`Player ${name} (${uid}) saved to registry`);
            }
        },
        [addToRegistry],
    );

    useEffect(() => {
        try {
            const amount = localStorage.getItem("transparencyAmount") ?? "70";
            const opacity = parseFloat(amount) / 100;
            document.documentElement.style.setProperty(
                "--transparency-amount",
                opacity.toString(),
            );
        } catch (err) {
            console.warn("Failed to apply transparency amount", err);
        }

        try {
            const unsubscribe = window.electron.onTransparencySettingChanged?.(
                (isDisabled: boolean) => {
                    document.body.style.backgroundColor = isDisabled ? "#000" : "transparent";
                },
            );
            return unsubscribe;
        } catch (err) {
            console.warn("Failed to setup transparency listener", err);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = window.electron.onTransparencyAmountChanged?.(
            (amount: number) => {
                try {
                    const opacity = amount / 100;
                    document.documentElement.style.setProperty(
                        "--transparency-amount",
                        opacity.toString(),
                    );
                    localStorage.setItem("transparencyAmount", amount.toString());
                } catch (err) {
                    console.warn("Failed to update transparency amount", err);
                }
            },
        );

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    useEffect(() => {
        try {
            const enabled = localStorage.getItem("clickthroughEnabled") === "true";
            window.electron.setIgnoreMouseEvents?.(enabled, { forward: true });
        } catch (err) {
            console.warn("Failed to apply clickthrough setting", err);
        }

        const unsubscribe = window.electron.onClickthroughChanged?.(
            (enabled: boolean) => {
                try {
                    window.electron.setIgnoreMouseEvents?.(enabled, { forward: true });
                    localStorage.setItem("clickthroughEnabled", enabled.toString());
                } catch (err) {
                    console.warn("Failed to update clickthrough setting", err);
                }
            },
        );

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    const handleDeleteFromRegistry = useCallback(
        async (uid: string) => {
            try {
                const result = await emitWithResponse({
                    event: "deleteFromPlayerRegistry",
                    data: { uid }
                });

                if (result.code === 0) {
                    console.log(`Deleted player from registry: ${uid}`);
                    await refreshRegistry();
                }
            } catch (error) {
                console.error("Failed to delete player from registry:", error);
            }
        },
        [emitWithResponse, refreshRegistry],
    );

    useEffect(() => {
        try {
            const disableTransparency = localStorage.getItem("disableTransparency") === "true";
            document.body.style.backgroundColor = disableTransparency ? "#000" : "transparent";

            const performanceMode = localStorage.getItem("performanceMode") === "true";
            if (performanceMode) {
                document.body.classList.add("performance-mode");
            } else {
                document.body.classList.remove("performance-mode");
            }
        } catch (err) {
            console.warn("Failed to apply transparency setting", err);
        }

        try {
            const unsubscribe = window.electron.onTransparencySettingChanged?.((isDisabled: boolean) => {
                document.body.style.backgroundColor = isDisabled ? "#000" : "transparent";
            });
            return unsubscribe;
        } catch (err) {
            console.warn("Failed to setup transparency listener", err);
        }
    }, []);

    return (
        <div className="group-window">
            <ResizeHandle handleResizeStart={handleResizeStart} />

            <GroupHeader
                onClose={handleClose}
                onDragStart={handleDragStart}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
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
