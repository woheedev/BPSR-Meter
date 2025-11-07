import React, { useEffect } from "react";
import { DevicePicker } from "./components/DevicePicker";
import DeviceControlBar from "./components/DeviceControlBar";
import { useWindowControls } from "../shared/hooks";
import { useWindowResize } from "../shared/hooks/useWindowResize";
import ResizeHandle from "../shared/components/ResizeHandle";

export default function DeviceApp(): React.JSX.Element {
    const { handleDragStart, handleClose } =
        useWindowControls({
            baseWidth: 480,
            baseHeight: 530,
            windowType: "device",
        });

    const { handleResizeStart } = useWindowResize('device');

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
            const disableTransparency = localStorage.getItem("disableTransparency") === "true";
            document.body.style.backgroundColor = disableTransparency ? "#000" : "transparent";
        } catch (err) {
            console.warn("Failed to apply transparency setting", err);
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

    return (
        <div className="device-app">
            <ResizeHandle handleResizeStart={handleResizeStart} />
            <DeviceControlBar title="Select Network Device" onDragStart={handleDragStart} onClose={handleClose} />
            <DevicePicker />
        </div>
    );
}
