import React from "react";
import WindowHeader, {
    type WindowHeaderProps,
} from "@/src/shared/components/WindowHeader";

export interface DeviceControlBarProps {
    isLocked?: boolean;
    onDragStart?: (e: React.MouseEvent) => void;
    onClose?: () => void;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    title?: string;
    t: (key: string, fallback?: string | null) => string;
}

export function DeviceControlBar({
    isLocked = false,
    onDragStart = () => {},
    onClose = () => {},
    onZoomIn = () => {},
    onZoomOut = () => {},
    title = "Device Picker",
    t,
}: DeviceControlBarProps): React.JSX.Element {
    return (
        <WindowHeader
            title={title}
            onClose={onClose}
            onDragStart={onDragStart}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            isLocked={isLocked}
            t={t}
            className="controls"
        />
    );
}

export default DeviceControlBar;
