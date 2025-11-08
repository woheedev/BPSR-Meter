import React from "react";
import { DragIndicator } from "./DragIndicator";

export interface WindowHeaderProps {
    /** Window title text */
    title: string;
    /** Close button handler */
    onClose: () => void;
    /** Drag start handler */
    onDragStart: (e: React.MouseEvent) => void;
    /** Zoom in handler */
    onZoomIn: () => void;
    /** Zoom out handler */
    onZoomOut: () => void;
    /** Whether the window is locked */
    isLocked: boolean;
    /** Translation function */
    t: (key: string, fallback?: string | null) => string;
    /** Optional CSS class name */
    className?: string;
}

export function WindowHeader({
    title,
    onClose,
    onDragStart,
    onZoomIn,
    onZoomOut,
    isLocked,
    t,
    className = "group-header",
}: WindowHeaderProps): React.JSX.Element {
    return (
        <div className={className}>
            {/* Drag Indicator */}
            <DragIndicator onDragStart={onDragStart} isLocked={isLocked} />

            {/* Window Title */}
            <span className="window-title">{title}</span>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Zoom Controls */}
            <button
                className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                onClick={onZoomOut}
                title={t("ui.buttons.zoomOut")}
                disabled={isLocked}
            >
                <i className="fa-solid fa-magnifying-glass-minus"></i>
            </button>
            <button
                className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                onClick={onZoomIn}
                title={t("ui.buttons.zoomIn")}
                disabled={isLocked}
            >
                <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>

            {/* Close Button */}
            <button
                className={`control-button ${isLocked ? "opacity-50 !pointer-events-none" : ""}`}
                onClick={onClose}
                title={t("ui.buttons.close")}
                disabled={isLocked}
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
}

export default WindowHeader;
