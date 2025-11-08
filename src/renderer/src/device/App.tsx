import React, { useEffect } from "react";
import { DevicePicker } from "./components/DevicePicker";
import DeviceControlBar from "./components/DeviceControlBar";
import { useWindowControls } from "@shared/hooks";
import { useWindowResize } from "@shared/hooks/useWindowResize";
import { useTranslations } from "@shared/hooks/useTranslations";
import ResizeHandle from "@shared/components/ResizeHandle";
import { electron } from "@shared/utils/electron";
import { getItem, setItem } from "@shared/utils/localStorage";

export default function DeviceApp(): React.JSX.Element {
    const { handleDragStart, handleClose, isLocked, zoomIn, zoomOut } =
        useWindowControls({
            baseWidth: 480,
            baseHeight: 530,
            windowType: "device",
        });

    const { handleResizeStart } = useWindowResize("device");
    const { t } = useTranslations();

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

    return (
        <div className="device-app">
            <ResizeHandle handleResizeStart={handleResizeStart} />
            <DeviceControlBar
                title={t("ui.titles.devicePicker")}
                onDragStart={handleDragStart}
                onClose={handleClose}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                isLocked={isLocked}
                t={t}
            />
            <DevicePicker />
        </div>
    );
}
